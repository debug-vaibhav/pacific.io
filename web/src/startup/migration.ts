import { Logger } from 'winston';
import { Errors } from '@pacific.io/common';
import { LoggerInstance } from '../resources/logger';
import Action from '../models/action';
import Permission from '../models/permission';
import RolePermission from '../models/role-permission';
import Role from '../models/role';
import User from '../models/user';
import Job from '../models/job';
import Source from '../models/source';
import SourceType from '../models/source-type';
import JobSource from '../models/job-source';
import JobScheduler from '../models/job-scheduler';
import JobExecution from '../models/job-execution';
import Resource from '../models/resource';

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
        Role.initialize();
        Permission.initialize();
        RolePermission.initialize();
        Source.initialize();
        Job.initialize();
        SourceType.initialize();
        JobSource.initialize();
        JobScheduler.initialize();
        JobExecution.initialize();
        Action.initialize();
        Resource.initialize();
    }
    static async syncAll() {
        await User.sync({ force: true });
        await Role.sync({ force: true });
        await Permission.sync({ force: true });
        await RolePermission.sync({ force: true });
        await Source.sync({ force: true });
        await Job.sync({ force: true });
        await SourceType.sync({ force: true });
        await JobSource.sync({ force: true });
        await JobScheduler.sync({ force: true });
        await JobExecution.sync({ force: true });
        await Action.sync({ force: true });
        await Resource.sync({ force: true });
    }
}
