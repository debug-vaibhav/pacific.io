/* eslint-disable @typescript-eslint/no-empty-function */
import { Logger } from 'winston';
import { Errors } from '@pacific.io/common';
import { LoggerInstance } from '../resources/logger';
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
            Migration.LOGGER.info('Worker migrations sync started');
            Migration.initializeAll();
            await Migration.syncAll();
            Migration.LOGGER.info('Worker migrations sync completed');
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
        await Source.sync({ force: true });
        await Job.sync({ force: true });
        await SourceType.sync({ force: true });
        await JobSource.sync({ force: true });
        await JobScheduler.sync({ force: true });
        await JobExecution.sync({ force: true });
    }
}
