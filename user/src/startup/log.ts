import { Express } from 'express';
import morgan from 'morgan';
import { LoggerInstance } from '../resources/logger';

export default class Log {
    public static useMorgan(application: Express) {
        const stream: any = {
            write: (message: any) => {
                LoggerInstance.logger.info(message);
            },
        };
        application.use(morgan('short', { stream: stream }));
    }
}
