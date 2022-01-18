import { Request, Response, NextFunction } from 'express';
import { Logger } from 'winston';
import { LoggerInstance } from '../resources/logger';

export class LogRequest {
    private static LOGGER: Logger = LoggerInstance.logger;
    static audit(req: Request, res: Response, next: NextFunction) {
        LogRequest.LOGGER.info('...');
    }
}
