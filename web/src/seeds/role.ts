import moment from 'moment';
import { RoleDto } from '@pacific.io/common';
import { Logger } from 'winston';
import { Errors } from '@pacific.io/common';
import { LoggerInstance } from '../resources/logger';
import Role from '../models/role';

export default class RoleSeeder {
    private static LOGGER: Logger = LoggerInstance.logger;

    public static async seed(): Promise<void> {
        try {
            const roleDtos: RoleDto[] = [new RoleDto('admin', moment().format('YYYY-DD-MM HH:mm:ss'), moment().format('YYYY-DD-MM HH:mm:ss'), 0, 0, false)];
            RoleSeeder.LOGGER.info('Role model truncation started before seeding');
            await Role.destroy({ truncate: true, cascade: true });
            RoleSeeder.LOGGER.info('Role model truncation completed');
            RoleSeeder.LOGGER.info('Role seeding process started');
            const size = await Role.count();
            if (size === 0) {
                await Role.bulkCreate(roleDtos);
            }
            RoleSeeder.LOGGER.info('Role seeding process completed');
        } catch (error) {
            console.log(error);
            RoleSeeder.LOGGER.error(Errors.SEED_ERROR.description, ':', Errors.SEED_ERROR.description, error);
        }
    }
}
