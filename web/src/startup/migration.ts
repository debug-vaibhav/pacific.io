import { Logger } from 'winston';
import { Errors } from '@pacific.io/common';
import { LoggerInstance } from '../resources/logger';
import User from '../models/user';
import Job from '../models/job';
import Source from '../models/source';
import SourceType from '../models/source-type';
import JobSource from '../models/job-source';
import JobScheduler from '../models/job-scheduler';
import JobExecution from '../models/job-execution';

export default class Migration {
    private static LOGGER: Logger = LoggerInstance.logger;

    static async syncMigrations() {
        try {
            Migration.LOGGER.info('Migrations sync started');
            Migration.initializeAll();
            await Migration.syncAll();
            Migration.LOGGER.info('Migrations sync completed');
        } catch (error) {
            Migration.LOGGER.error(Errors.MODEL_SYNC_ERROR.description, ':', Errors.MODEL_SYNC_ERROR.description, error);
        }
    }
    static initializeAll() {
        User.initialize();
        Source.initialize();
        Job.initialize();
        SourceType.initialize();
        JobSource.initialize();
        JobScheduler.initialize();
        JobExecution.initialize();
    }
    static async syncAll() {
        await User.sync();
        await Source.sync();
        await Job.sync();
        await SourceType.sync();
        await JobSource.sync();
        await JobScheduler.sync();
        await JobExecution.sync();
    }
}
