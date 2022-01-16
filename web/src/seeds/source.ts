import moment from 'moment';
import { Logger } from 'winston';
import { Errors } from '@pacific.io/common';
import { LoggerInstance } from '../resources/logger';
import Source from '../models/dao/source';
import SourceDto from '../models/dto/source';

export default class SourceSeeder {
    private static LOGGER: Logger = LoggerInstance.logger;

    public static async seed(): Promise<void> {
        try {
            const sourceDtos: SourceDto[] = [
                new SourceDto(
                    'MySQL data Source',
                    1,
                    'this data source extracts data from mysql databases',
                    'localhost',
                    3306,
                    'username',
                    'password',
                    'database',
                    undefined,
                    moment().format('YYYY-DD-MM HH:mm:ss'),
                    moment().format('YYYY-DD-MM HH:mm:ss'),
                    0,
                    0,
                    false
                ),
                new SourceDto(
                    'MySQL data Source',
                    1,
                    'this data source extracts data from mysql databases',
                    'localhost',
                    3306,
                    'username',
                    'password',
                    'database',
                    undefined,
                    moment().format('YYYY-DD-MM HH:mm:ss'),
                    moment().format('YYYY-DD-MM HH:mm:ss'),
                    0,
                    0,
                    false
                ),
                new SourceDto(
                    'MySQL data Source',
                    1,
                    'this data source extracts data from mysql databases',
                    'localhost',
                    3306,
                    'username',
                    'password',
                    'database',
                    undefined,
                    moment().format('YYYY-DD-MM HH:mm:ss'),
                    moment().format('YYYY-DD-MM HH:mm:ss'),
                    0,
                    0,
                    false
                ),
            ];
            SourceSeeder.LOGGER.info('Source model truncation started before seeding');
            await Source.destroy({ truncate: true });
            SourceSeeder.LOGGER.info('Source model truncation completed');
            SourceSeeder.LOGGER.info('Source seeding process started');
            await Source.bulkCreate(sourceDtos);
            SourceSeeder.LOGGER.info('Source seeding process completed');
        } catch (error) {
            SourceSeeder.LOGGER.error(Errors.SEED_ERROR.description, ':', Errors.SEED_ERROR.description, error);
        }
    }
}
