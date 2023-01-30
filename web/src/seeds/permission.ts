import moment from 'moment';
import { ActionDto, PermissionDto, ResourceDto } from '@pacific.io/common';
import { Logger } from 'winston';
import { Errors } from '@pacific.io/common';
import { LoggerInstance } from '../resources/logger';
import Resource from '../models/resource';
import Action from '../models/action';
import Permission from '../models/permission';

export default class PermissionSeeder {
    private static LOGGER: Logger = LoggerInstance.logger;

    public static async seed(): Promise<void> {
        try {
            const resources: ResourceDto[] = await Resource.findAll({ where: { isDeleted: false } });
            const actions: ActionDto[] = await Action.findAll({ where: { isDeleted: false } });
            const permissionDtos: PermissionDto[] = [];
            for (const resource of resources) {
                for (const action of actions) {
                    if (
                        !(
                            (resource.name === 'source' || resource.name === 'sink' || resource.name === 'user') &&
                            (action.name === 'killed' ||
                                action.name === 'resumed' ||
                                action.name === 'running' ||
                                action.name === 'skipped' ||
                                action.name === 'scheduled' ||
                                action.name === 'stopped')
                        )
                    ) {
                        permissionDtos.push(new PermissionDto(resource.id, action.id, moment().format('YYYY-DD-MM HH:mm:ss'), moment().format('YYYY-DD-MM HH:mm:ss'), 0, 0, false));
                    }
                }
            }
            PermissionSeeder.LOGGER.info('Permission model truncation started before seeding');
            await Permission.destroy({ truncate: true, cascade: true });
            PermissionSeeder.LOGGER.info('Permission model truncation completed');
            PermissionSeeder.LOGGER.info('Permission seeding process started');
            const size = await Permission.count();
            if (size === 0) {
                await Permission.bulkCreate(permissionDtos);
            }
            PermissionSeeder.LOGGER.info('Permission seeding process completed');
        } catch (error) {
            PermissionSeeder.LOGGER.error(Errors.SEED_ERROR.description, ':', Errors.SEED_ERROR.description, error);
        }
    }
}
