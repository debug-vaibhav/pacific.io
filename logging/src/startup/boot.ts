import fs from 'fs';
import path from 'path';
import { Express } from 'express';
import { Logger } from 'winston';
import config from 'config';
import { Errors } from '@pacific.io/common';
import { LoggerInstance } from '../resources/logger';

export default class Boot {
    private static LOGGER: Logger = LoggerInstance.logger;

    static boot(application: Express) {
        const port: number = config.get('port');
        const services: string[] = config.get('services');
        const logPath: string = config.get('logPath');
        application
            .listen(port, () => {
                Boot.LOGGER.warn(`Logging microservice running. Visit http://localhost:${port}`);
                Boot.LOGGER.info('Log directories for microservices started creating');
                for (const service of services) {
                    fs.mkdirSync(path.join(logPath, service));
                }
                Boot.LOGGER.info('Log directories for microservices are created');
            })
            .on('error', () => {
                Boot.LOGGER.info(Errors.APP_ERROR.description, ':', Errors.APP_ERROR.description);
            });
    }
}
