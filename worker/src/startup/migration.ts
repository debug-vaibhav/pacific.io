/* eslint-disable @typescript-eslint/no-empty-function */
import { Logger } from 'winston';
import { Errors } from '@pacific.io/common';
import { LoggerInstance } from '../resources/logger';

export default class Migration {
    private static LOGGER: Logger = LoggerInstance.logger;

    static async syncMigrations() {
        try {
            Migration.LOGGER.info('Worker migrations sync started');
            Migration.initializeAll();
            await Migration.syncAll();
            Migration.LOGGER.info('Worker migrations sync completed');
        } catch (error) {
            Migration.LOGGER.info(Errors.MODEL_SYNC_ERROR.description, ':', Errors.MODEL_SYNC_ERROR.description);
        }
    }
    static initializeAll() {}
    static async syncAll() {}
}
