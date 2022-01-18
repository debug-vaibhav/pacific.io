import { Request, Response, NextFunction } from 'express';
import { Logger } from 'winston';
import { CreateError, UpdateError, NotExistsError, DeleteError, Events, UserDto } from '@pacific.io/common';
import UserService from '../services/user';
import { LoggerInstance } from '../resources/logger';
import { WorkerProducer } from '../events/producers/worker-producer';
import { WorkerEvent } from '../events/worker-event';

export default class UserController {
    private static LOGGER: Logger = LoggerInstance.logger;
    private static userService: UserService = new UserService();
    private static workerProducer: WorkerProducer = new WorkerProducer();

    public static async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const users: UserDto[] = await UserController.userService.getAll();
            res.json({ message: 'Users fetched successfully', data: users });
        } catch (error) {
            next(new NotExistsError('User', error));
        }
    }

    public static async getById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const user: UserDto | null = await UserController.userService.getById(req.params.id);
            res.json({ message: 'User fetched successfully', data: user });
        } catch (error) {
            next(new NotExistsError('User', error));
        }
    }

    public static async getByEmail(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const user: UserDto | null = await UserController.userService.getByEmail(req.body.email);
            res.json({ message: 'Data fetched successfully', data: user });
        } catch (error) {
            next(new CreateError('User', error));
        }
    }

    public static async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const user: UserDto = req.body;
            await UserController.userService.create(user);
            res.json({ message: 'User created successfully', data: user });
        } catch (error) {
            next(new CreateError('User', error));
        }
    }

    public static async deleteById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const user: UserDto | null = await UserController.userService.deleteById(req.params.id);
            res.json({ message: 'User deleted successfully', data: user });
        } catch (error) {
            next(new DeleteError('User', error));
        }
    }

    public static async updateById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const user: UserDto | null = await UserController.userService.updateById(req.params.id, req.body);
            res.json({ message: 'User updated successfully', data: user });
        } catch (error) {
            next(new UpdateError('User', error));
        }
    }

    // public static async getUsersV1(req: Request, res: Response, next: NextFunction): Promise<void> {
    //     // const users: User[] = await User.findAll();
    //     // res.json({ message: 'Data fetched successfully', data: users });
    //     // ----------------------------------------------------------------------------------------------------------------------------------------------
    //     let userCount = 0;
    //     try {
    //         userCount = await User.count();
    //     } catch (error) {
    //         return next(new DatabaseError(error));
    //     }
    //     const limit = 5000;
    //     let loops: number = Math.floor(userCount / limit);
    //     let offset = 0;
    //     const userStream: Readable = new Readable({
    //         objectMode: true,
    //         // eslint-disable-next-line @typescript-eslint/no-empty-function
    //         read() {},
    //     });
    //     userStream.push('[', 'utf8');
    //     while (loops >= 0) {
    //         if (loops === 0) {
    //             userStream.push(']', 'utf8');
    //             userStream.push(null);
    //         } else {
    //             const users: User[] = await User.findAll({ offset, limit });
    //             userStream.push(JSON.stringify(users), 'utf8');
    //         }
    //         offset += limit;
    //         loops--;
    //     }
    //     userStream.on('data', (chunk: string) => {
    //         res.write(chunk);
    //     });
    //     userStream.on('end', () => {
    //         res.end();
    //     });
    //     userStream.on('error', (error: any) => {
    //         return next(new DatabaseError(error));
    //     });
    //     // userStream.pipe(res);
    // }
}
