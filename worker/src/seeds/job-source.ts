import moment from 'moment';
import wisnton from 'winston';
import { Errors, JobSourceDto } from '@pacific.io/common';
import { LoggerInstance } from '../resources/logger';
import JobSource from '../models/job-source';

export default class JobSourceSeeder {
    private static LOGGER: wisnton.Logger = LoggerInstance.logger;

    public static async seed(): Promise<void> {
        try {
            const jobSourceDtos: JobSourceDto[] = [
                new JobSourceDto(1, 1, moment().format('YYYY-DD-MM HH:mm:ss'), moment().format('YYYY-DD-MM HH:mm:ss'), 0, 0, true),
                new JobSourceDto(1, 1, moment().format('YYYY-DD-MM HH:mm:ss'), moment().format('YYYY-DD-MM HH:mm:ss'), 0, 0, true),
                new JobSourceDto(1, 1, moment().format('YYYY-DD-MM HH:mm:ss'), moment().format('YYYY-DD-MM HH:mm:ss'), 0, 0, true),
            ];
            JobSourceSeeder.LOGGER.info('JobSource model truncation started before seeding');
            await JobSource.destroy({ truncate: true, cascade: true });
            JobSourceSeeder.LOGGER.info('JobSource model truncation completed');
            JobSourceSeeder.LOGGER.info('JobSource seeding process started');
            const size = await JobSource.count();
            if (size === 0) {
                await JobSource.bulkCreate(jobSourceDtos);
            }
            JobSourceSeeder.LOGGER.info('JobSource seeding process completed');
        } catch (error) {
            JobSourceSeeder.LOGGER.error(Errors.SEED_ERROR.description, ':', Errors.SEED_ERROR.description, error);
        }
    }
}
