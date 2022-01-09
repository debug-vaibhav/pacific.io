import { Request, Response, NextFunction } from 'express';
import { NotFoundError } from '@pacific.io/common';

export default class NorController {
    public static noRoute(req: Request, res: Response, next: NextFunction): void {
        throw new NotFoundError('No route found');
    }
}
