import { Logger } from 'winston';
import { Request, Response, NextFunction } from 'express';
import config from 'config';
import jwt from 'jsonwebtoken';
import { Errors, CreateError, ExistsError, NotExistsError, AuthenticationError, MismatchError, AuthUtility, Messages, UserDto, UserSignupDto, UserRoleDto, EmailPasswordDto, DateTimeUtility } from '@pacific.io/common';
import { LoggerInstance } from '../resources/logger';
import UserService from '../services/user';
import { UserCreated } from '../events/user-created-event';
import { UserCreatedProducer } from '../events/producers/user-created-producer';

export default class AuthController {
    private static LOGGER: Logger = LoggerInstance.logger;
    private static userService: UserService = new UserService();
    private static userCreatedProducer: UserCreatedProducer = new UserCreatedProducer();

    public static async login(req: Request, res: Response, next: NextFunction): Promise<void | Response<any>> {
        try {
            const { email, password }: EmailPasswordDto = req.body;
            const user: UserDto | null = await AuthController.userService.getByEmail(email);
            if (user) {
                const isPasswordCorrect: boolean = await AuthUtility.comparePassword(password, user.password);
                if (isPasswordCorrect) {
                    const payload: UserRoleDto = new UserRoleDto(user.firstName, user.lastName, user.email, user.roleId);
                    const token: string = jwt.sign({ firstName: user.firstName, lastName: user.lastName, email: user.email, roleId: user.roleId }, config.get('jwtSecretKey'), { expiresIn: '24h' });
                    return res.status(201).json({
                        message: Messages.LOGIN_SUCCESS.description,
                        data: { ...payload, token: token },
                    });
                }
                return next(new AuthenticationError('Authentication Failed'));
            }
            return next(new NotExistsError('User', 'User does not exists'));
        } catch (error) {
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
            let user: UserDto | null = await AuthController.userService.getByEmail(email);
            if (!user) {
<<<<<<< HEAD
                const hashedPassword: string = await AuthUtility.hashPassword(password);
                const userDto: UserDto = new UserDto(firstName, lastName, email, hashedPassword, 1, false, true, DateTimeUtility.getCurrentDateTime(), DateTimeUtility.getCurrentDateTime(), 0, 0);
=======
                const userDto: UserDto = new UserDto(firstName, lastName, email, password, 1, false, true, moment().format('YYYY-DD-MM HH:mm:ss'), moment().format('YYYY-DD-MM HH:mm:ss'), 0, 0);
>>>>>>> 6ffa7946a5b16d23ac09b6a73cdce49c0bb7e932
                user = await AuthController.userService.create(userDto);
                const event: UserCreated = new UserCreated(user);
                await AuthController.userCreatedProducer.publish(event);
                return res.status(201).json({ message: Messages.USER_CREATED.description, data: user });
            }
            return next(new ExistsError('User', 'User Already Exists'));
        } catch (error) {
            AuthController.LOGGER.error(Errors.CREATE_ERROR.description, ':', Errors.CREATE_ERROR.description, error);
            next(new CreateError('User', error));
        }
    }
}
