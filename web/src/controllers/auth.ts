import { Logger } from 'winston';
import { Request, Response, NextFunction } from 'express';
import config from 'config';
import moment from 'moment';
import jwt from 'jsonwebtoken';
import { Errors, CreateError, ExistsError, NotExistsError, AuthenticationError, MismatchError, AuthUtility, Messages, Events } from '@pacific.io/common';
import { LoggerInstance } from '../resources/logger';
import User from '../models/dao/user';
import { UserProducer } from '../events/producers/user-producer';
import { UserEvent } from '../events/user-event';
import UserSignupDto from '../models/dto/user-signup';
import UserRoleDto from '../models/dto/user-role';
import EmailPasswordDto from '../models/dto/email-password';

export default class AuthController {
    private static LOGGER: Logger = LoggerInstance.logger;
    private static userProducer: UserProducer = new UserProducer();

    public static index(req: Request, res: Response, next: NextFunction): void {
        res.json({ message: Messages.SERVICE_LIVE.description, data: null });
    }

    public static async login(req: Request, res: Response, next: NextFunction): Promise<void | Response<any>> {
        try {
            const { email, password }: EmailPasswordDto = req.body;
            const user: User | null = await User.findOne({ where: { email: email } });
            if (user) {
                const isPasswordCorrect: boolean = await AuthUtility.comparePassword(password, user.password);
                if (isPasswordCorrect) {
                    const payload: UserRoleDto = new UserRoleDto(user.firstName, user.lastName, user.email, user.roleId);
                    const token: string = jwt.sign(JSON.stringify(payload), config.get('jwtSecretKey'), { expiresIn: '24h' });
                    // const event: UserEvent = new UserEvent(Events.Login, payload);
                    // await AuthController.userProducer.publish(event);
                    return res.status(201).json({
                        message: Messages.LOGIN_SUCCESS.description,
                        data: { ...payload, token: token },
                    });
                }
                return next(new AuthenticationError('Authentication Failed'));
            }
            return next(new NotExistsError('User', 'User does not exists'));
        } catch (error) {
            console.log(error);
            AuthController.LOGGER.error(Errors.AUTHENTICATION_ERROR.description, ':', Errors.AUTHENTICATION_ERROR.description, error);
            next(new AuthenticationError('Authentication Failed'));
        }
    }

    public static async signup(req: Request, res: Response, next: NextFunction): Promise<void | Response<any>> {
        try {
            const { firstName, lastName, email, password, confirmPassword }: UserSignupDto = req.body;
            if (password !== confirmPassword) {
                return next(new MismatchError('Password', 'Password does not match'));
            }
            let user: User | null = await User.findOne({ where: { email: email } });
            if (!user) {
                const hashedPassword: string = await AuthUtility.hashPassword(password);
                user = await User.create({
                    firstName,
                    lastName,
                    email,
                    password: hashedPassword,
                    roleId: 1,
                    isDeleted: false,
                    isActivated: true,
                    createdDate: moment().format('YYYY-DD-MM HH:mm:ss'),
                    updatedDate: moment().format('YYYY-DD-MM HH:mm:ss'),
                    createdBy: 0,
                    updatedBy: 0,
                });
                const event: UserEvent = new UserEvent(Events.Signup, user);
                await AuthController.userProducer.publish(event);
                return res.status(201).json({ message: Messages.USER_CREATED.description, data: user });
            }
            return next(new ExistsError('User', 'User Already Exists'));
        } catch (error) {
            AuthController.LOGGER.error(Errors.CREATE_ERROR.description, ':', Errors.CREATE_ERROR.description, error);
            next(new CreateError('User', error));
        }
    }
}
