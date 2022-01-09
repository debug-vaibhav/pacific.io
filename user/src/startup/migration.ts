import { Logger } from 'winston';
import { Errors } from '@pacific.io/common';
import { LoggerInstance } from '../resources/logger';
import User from '../models/dao/user';

export default class Migration {
    private static LOGGER: Logger = LoggerInstance.logger;

    static async syncMigrations() {
        try {
            Migration.LOGGER.info('User migrations sync started');
            Migration.initializeAll();
            await Migration.syncAll();
            Migration.LOGGER.info('User migrations sync completed');
        } catch (error) {
            Migration.LOGGER.error(Errors.MODEL_SYNC_ERROR.description, ':', Errors.MODEL_SYNC_ERROR.description, error);
        }
    }
    static initializeAll() {
        User.initialize();
    }
    static async syncAll() {
        await User.sync();
    }
}
