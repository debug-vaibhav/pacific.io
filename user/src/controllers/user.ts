import { Request, Response, NextFunction } from 'express';
import { DatabaseError } from '@pacific.io/common';
import { Readable } from 'stream';
import User from '../models/dao/user';
import UserService from '../services/user';

export default class UserController {
    public static async getUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
        // const users: User[] = await User.findAll();
        // res.json({ message: 'Data fetched successfully', data: users });
        // ----------------------------------------------------------------------------------------------------------------------------------------------
        let userCount = 0;
        try {
            userCount = await User.count();
        } catch (error) {
            return next(new DatabaseError(error));
        }
        const limit = 5000;
        let loops: number = Math.floor(userCount / limit);
        let offset = 0;
        const userStream: Readable = new Readable({
            objectMode: true,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            read() {},
        });
        userStream.push('[', 'utf8');
        while (loops >= 0) {
            if (loops === 0) {
                userStream.push(']', 'utf8');
                userStream.push(null);
            } else {
                const users: User[] = await User.findAll({ offset, limit });
                userStream.push(JSON.stringify(users), 'utf8');
            }
            offset += limit;
            loops--;
        }
        userStream.on('data', (chunk: string) => {
            res.write(chunk);
        });
        userStream.on('end', () => {
            res.end();
        });
        userStream.on('error', (error: any) => {
            return next(new DatabaseError(error));
        });
        // userStream.pipe(res);
    }

    public static async getUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        const users: User[] = await User.findAll({ offset: 0, limit: 200000 });
        res.json({ message: 'Data fetched successfully', data: users });
    }

    public static createUser(req: Request, res: Response, next: NextFunction): void {
        res.json({ message: 'success', data: null });
    }

    public static deleteUser(req: Request, res: Response, next: NextFunction): void {
        res.json({ message: 'success', data: null });
    }

    public static updateUser(req: Request, res: Response, next: NextFunction): void {
        res.json({ message: 'success', data: null });
    }
}
