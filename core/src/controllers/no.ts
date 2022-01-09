import { Request, Response, NextFunction } from 'express';
import { NotFoundError } from '@pacific.io/common';

export default class NoController {
    public static noRoute(req: Request, res: Response, next: NextFunction): void {
        throw new NotFoundError('No Route Found');
    }
}
