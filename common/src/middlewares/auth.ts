import { Request, Response, NextFunction } from 'express';
import { AuthorizationError } from '../models/error/auth/auth-error';
import { AuthUtility } from '../utils/auth';

export class Auth {
    static isAuthenticated(req: Request, res: Response, next: NextFunction) {
        const authorizationHeader: string | undefined = req.header('authorization');
        if (!authorizationHeader) {
            throw new AuthorizationError('Authorization failed');
        }
        const token: string = authorizationHeader.split(' ')[1];
        const payload: any = AuthUtility.getPayload(token);
        if (!payload) {
            throw new AuthorizationError('Authorization failed');
        }
        req.user = payload;
        next();
    }
}
