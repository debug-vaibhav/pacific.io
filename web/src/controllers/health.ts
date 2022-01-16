import { Request, Response, NextFunction } from 'express';
import path from 'path';
import { Heapdump } from '@pacific.io/common';

export default class HealthController {
    public static getHeapdump(req: Request, res: Response, next: NextFunction): void {
        Heapdump.createHeapSnapshot('user', path.resolve(__dirname, '../../../data'));
        res.json({ message: 'Heapdump created successfully', data: null });
    }
}
