import moment from 'moment';
import { SourceTypeDto } from '@pacific.io/common';
import { Logger } from 'winston';
import { Errors } from '@pacific.io/common';
import { LoggerInstance } from '../resources/logger';
import SourceType from '../models/source-type';

export default class SourceTypeSeeder {
    private static LOGGER: Logger = LoggerInstance.logger;

    public static async seed(): Promise<void> {
        try {
            const sourceTypeDtos: SourceTypeDto[] = [
                new SourceTypeDto('MySQL', moment().format('YYYY-DD-MM HH:mm:ss'), moment().format('YYYY-DD-MM HH:mm:ss'), 0, 0, false),
                new SourceTypeDto('MySQL', moment().format('YYYY-DD-MM HH:mm:ss'), moment().format('YYYY-DD-MM HH:mm:ss'), 0, 0, false),
                new SourceTypeDto('MongoDB', moment().format('YYYY-DD-MM HH:mm:ss'), moment().format('YYYY-DD-MM HH:mm:ss'), 0, 0, false),
                new SourceTypeDto('REST', moment().format('YYYY-DD-MM HH:mm:ss'), moment().format('YYYY-DD-MM HH:mm:ss'), 0, 0, false),
                new SourceTypeDto('FTP', moment().format('YYYY-DD-MM HH:mm:ss'), moment().format('YYYY-DD-MM HH:mm:ss'), 0, 0, false),
                new SourceTypeDto('SFTP', moment().format('YYYY-DD-MM HH:mm:ss'), moment().format('YYYY-DD-MM HH:mm:ss'), 0, 0, false),
            ];
            SourceTypeSeeder.LOGGER.info('SourceType model truncation started before seeding');
            await SourceType.destroy({ truncate: true, cascade: true });
            SourceTypeSeeder.LOGGER.info('SourceType model truncation completed');
            SourceTypeSeeder.LOGGER.info('SourceType seeding process started');
            const size = await SourceType.count();
            if (size === 0) {
                await SourceType.bulkCreate(sourceTypeDtos);
            }
            SourceTypeSeeder.LOGGER.info('SourceType seeding process completed');
        } catch (error) {
            SourceTypeSeeder.LOGGER.error(`${Errors.SEED_ERROR.header} : ${Errors.SEED_ERROR.description}`, error);
        }
    }
}
