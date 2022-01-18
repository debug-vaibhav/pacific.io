import { Logger } from 'winston';
import { Request, Response, NextFunction } from 'express';
import config from 'config';
import moment from 'moment';
import jwt from 'jsonwebtoken';
import { Errors, CreateError, ExistsError, NotExistsError, AuthenticationError, MismatchError, AuthUtility, Messages, UserDto, UserSignupDto, UserRoleDto, EmailPasswordDto } from '@pacific.io/common';
import { LoggerInstance } from '../resources/logger';
import UserService from '../services/user';

export default class AuthController {
    private static LOGGER: Logger = LoggerInstance.logger;
    private static userService: UserService = new UserService();

    public static index(req: Request, res: Response, next: NextFunction): void {
        res.json({ message: Messages.SERVICE_LIVE.description, data: null });
    }

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
                const hashedPassword: string = await AuthUtility.hashPassword(password);
                const userDto: UserDto = new UserDto(firstName, lastName, email, hashedPassword, 1, false, true, moment().format('YYYY-DD-MM HH:mm:ss'), moment().format('YYYY-DD-MM HH:mm:ss'), 0, 0);
                user = await AuthController.userService.create(userDto);
                return res.status(201).json({ message: Messages.USER_CREATED.description, data: user });
            }
            return next(new ExistsError('User', 'User Already Exists'));
        } catch (error) {
            AuthController.LOGGER.error(Errors.CREATE_ERROR.description, ':', Errors.CREATE_ERROR.description, error);
            next(new CreateError('User', error));
        }
    }
}
