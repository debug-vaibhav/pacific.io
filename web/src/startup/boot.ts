import { Express } from 'express';
import { Logger } from 'winston';
import config from 'config';
import { Errors } from '@pacific.io/common';
import { LoggerInstance } from '../resources/logger';

export default class Boot {
    private static LOGGER: Logger = LoggerInstance.logger;

    static boot(application: Express) {
        const port: number = config.get('port');
        application
            .listen(port, () => {
                Boot.LOGGER.warn(`Web microservice running. Visit http://localhost:${port}`);
            })
            .on('error', (error) => {
                Boot.LOGGER.info(Errors.APP_ERROR.description, ':', Errors.APP_ERROR.description);
            });
    }
}
