import moment from 'moment';
import { RolePermissionDto } from '@pacific.io/common';
import { Logger } from 'winston';
import { Errors } from '@pacific.io/common';
import { LoggerInstance } from '../resources/logger';
import RolePermission from '../models/role-permission';
import Permission from '../models/permission';

export default class RolePermissionSeeder {
    private static LOGGER: Logger = LoggerInstance.logger;

    public static async seed(): Promise<void> {
        try {
            const permissions: Permission[] = await Permission.findAll({ where: { isDeleted: false } });
            const rolePermissionDtos: RolePermissionDto[] = [];
            for (const permission of permissions) {
                rolePermissionDtos.push(new RolePermissionDto(1, permission.id, moment().format('YYYY-DD-MM HH:mm:ss'), moment().format('YYYY-DD-MM HH:mm:ss'), 0, 0, false));
            }
            RolePermissionSeeder.LOGGER.info('RolePermission model truncation started before seeding');
            await RolePermission.destroy({ truncate: true, cascade: true });
            RolePermissionSeeder.LOGGER.info('RolePermission model truncation completed');
            RolePermissionSeeder.LOGGER.info('RolePermission seeding process started');
            const size = await RolePermission.count();
            if (size === 0) {
                await RolePermission.bulkCreate(rolePermissionDtos);
            }
            RolePermissionSeeder.LOGGER.info('RolePermission seeding process completed');
        } catch (error) {
            RolePermissionSeeder.LOGGER.error(Errors.SEED_ERROR.description, ':', Errors.SEED_ERROR.description, error);
        }
    }
}
