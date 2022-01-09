import { Request, Response, NextFunction } from 'express';
import { Messages } from '@pacific.io/common';

export default class IndexController {
    public static index(req: Request, res: Response, next: NextFunction): void {
        res.json({ message: Messages.SERVICE_LIVE.description, data: null });
    }
}
