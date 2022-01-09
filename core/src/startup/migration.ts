import { Logger } from 'winston';
import { Errors } from '@pacific.io/common';
import { LoggerInstance } from '../resources/logger';
import Job from '../models/dao/job';
import Source from '../models/dao/source';
import SourceType from '../models/dao/source-type';
import JobSource from '../models/dao/job-source';
import JobScheduler from '../models/dao/job-scheduler';
import JobExecution from '../models/dao/job-execution';

export default class Migration {
    private static LOGGER: Logger = LoggerInstance.logger;

    static async syncMigrations() {
        try {
            Migration.LOGGER.info('Core migrations sync started');
            Migration.initializeAll();
            await Migration.syncAll();
            Migration.LOGGER.info('Core migrations sync completed');
        } catch (error) {
            Migration.LOGGER.info(Errors.MODEL_SYNC_ERROR.description, ':', Errors.MODEL_SYNC_ERROR.description);
        }
    }
    static initializeAll() {
        Source.initialize();
        Job.initialize();
        SourceType.initialize();
        JobSource.initialize();
        JobScheduler.initialize();
        JobExecution.initialize();
    }
    static async syncAll() {
        await Source.sync();
        await Job.sync();
        await SourceType.sync();
        await JobSource.sync();
        await JobScheduler.sync();
        await JobExecution.sync();
    }
}
