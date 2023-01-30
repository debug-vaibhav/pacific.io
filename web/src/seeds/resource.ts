import moment from 'moment';
import { ResourceDto } from '@pacific.io/common';
import { Logger } from 'winston';
import { Errors } from '@pacific.io/common';
import { LoggerInstance } from '../resources/logger';
import Resource from '../models/resource';

export default class ResourceSeeder {
    private static LOGGER: Logger = LoggerInstance.logger;

    public static async seed(): Promise<void> {
        try {
            const userDtos: ResourceDto[] = [
                new ResourceDto('source', moment().format('YYYY-DD-MM HH:mm:ss'), moment().format('YYYY-DD-MM HH:mm:ss'), 0, 0, false),
                new ResourceDto('sink', moment().format('YYYY-DD-MM HH:mm:ss'), moment().format('YYYY-DD-MM HH:mm:ss'), 0, 0, false),
                new ResourceDto('job', moment().format('YYYY-DD-MM HH:mm:ss'), moment().format('YYYY-DD-MM HH:mm:ss'), 0, 0, false),
                new ResourceDto('user', moment().format('YYYY-DD-MM HH:mm:ss'), moment().format('YYYY-DD-MM HH:mm:ss'), 0, 0, false),
            ];
            ResourceSeeder.LOGGER.info('Resource model truncation started before seeding');
            await Resource.destroy({ truncate: true, cascade: true });
            ResourceSeeder.LOGGER.info('Resource model truncation completed');
            ResourceSeeder.LOGGER.info('Resource seeding process started');
            const size = await Resource.count();
            if (size === 0) {
                await Resource.bulkCreate(userDtos);
            }
            ResourceSeeder.LOGGER.info('Resource seeding process completed');
        } catch (error) {
            ResourceSeeder.LOGGER.error(Errors.SEED_ERROR.description, ':', Errors.SEED_ERROR.description, error);
        }
    }
}
