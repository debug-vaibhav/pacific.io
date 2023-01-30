/* eslint-disable @typescript-eslint/no-empty-function */
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
        await User.sync({ alter: true });
        await Source.sync({ alter: true });
        await Job.sync({ alter: true });
        await SourceType.sync({ alter: true });
        await JobSource.sync({ alter: true });
        await JobScheduler.sync({ alter: true });
        await JobExecution.sync({ alter: true });
    }
}
