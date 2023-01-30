/* eslint-disable @typescript-eslint/no-empty-function */
import { Logger } from 'winston';
import { Errors } from '@pacific.io/common';
import { LoggerInstance } from '../resources/logger';
<<<<<<< HEAD
import User from '../models/user';
=======
>>>>>>> 6ffa7946a5b16d23ac09b6a73cdce49c0bb7e932
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
<<<<<<< HEAD
        User.initialize();
=======
>>>>>>> 6ffa7946a5b16d23ac09b6a73cdce49c0bb7e932
        Source.initialize();
        Job.initialize();
        SourceType.initialize();
        JobSource.initialize();
        JobScheduler.initialize();
        JobExecution.initialize();
    }
    static async syncAll() {
<<<<<<< HEAD
        await User.sync({ alter: true });
        await Source.sync({ alter: true });
        await Job.sync({ alter: true });
        await SourceType.sync({ alter: true });
        await JobSource.sync({ alter: true });
        await JobScheduler.sync({ alter: true });
        await JobExecution.sync({ alter: true });
=======
        await Source.sync({ force: true });
        await Job.sync({ force: true });
        await SourceType.sync({ force: true });
        await JobSource.sync({ force: true });
        await JobScheduler.sync({ force: true });
        await JobExecution.sync({ force: true });
>>>>>>> 6ffa7946a5b16d23ac09b6a73cdce49c0bb7e932
    }
}
