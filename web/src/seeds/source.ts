<<<<<<< HEAD
=======
import moment from 'moment';
import { SourceDto } from '@pacific.io/common';
>>>>>>> 6ffa7946a5b16d23ac09b6a73cdce49c0bb7e932
import { Logger } from 'winston';
import { Errors, SourceDto, DateTimeUtility } from '@pacific.io/common';
import { LoggerInstance } from '../resources/logger';
import Source from '../models/source';

export default class SourceSeeder {
    private static LOGGER: Logger = LoggerInstance.logger;

    public static async seed(): Promise<void> {
        try {
            await Source.initialize();
            await Source.sync({ alter: true });
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
                    "",
                    DateTimeUtility.getCurrentDateTime(),
                    DateTimeUtility.getCurrentDateTime(),
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
                    "",
                    DateTimeUtility.getCurrentDateTime(),
                    DateTimeUtility.getCurrentDateTime(),
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
                    "",
                    DateTimeUtility.getCurrentDateTime(),
                    DateTimeUtility.getCurrentDateTime(),
                    0,
                    0,
                    false
                ),
            ];
            SourceSeeder.LOGGER.info('Source model truncation started before seeding');
            await Source.destroy({ truncate: true, cascade: true });
            SourceSeeder.LOGGER.info('Source model truncation completed');
            SourceSeeder.LOGGER.info('Source seeding process started');
            const size = await Source.count();
            if (size === 0) {
                await Source.bulkCreate(sourceDtos);
            }
            SourceSeeder.LOGGER.info('Source seeding process completed');
        } catch (error) {
            console.log(error);
            SourceSeeder.LOGGER.error(Errors.SEED_ERROR.description, ':', Errors.SEED_ERROR.description, error);
        }
    }
}
