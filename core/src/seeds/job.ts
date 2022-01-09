import moment from 'moment';
import { Logger } from 'winston';
import { Errors } from '@pacific.io/common';
import { LoggerInstance } from '../resources/logger';
import Job from '../models/dao/job';
import JobDto from '../models/dto/job';

export default class JobSeeder {
    private static LOGGER: Logger = LoggerInstance.logger;

    public static async seed(): Promise<void> {
        try {
            const userDtos: JobDto[] = [
                new JobDto(
                    'MySQL data job',
                    'this job extracts data from mysql databases',
                    'Asia/Kolkata',
                    '0 0 12 1/1 * ? *',
                    'SELECT * FROM dbo.users',
                    moment().format('YYYY-DD-MM HH:mm:ss'),
                    moment().format('YYYY-DD-MM HH:mm:ss'),
                    0,
                    0,
                    true
                ),
                new JobDto(
                    'MSSQL data job',
                    'this job extracts data from sql server databases',
                    'Asia/Kolkata',
                    '0 0 12 1/1 * ? *',
                    'SELECT * FROM dbo.users',
                    moment().format('YYYY-DD-MM HH:mm:ss'),
                    moment().format('YYYY-DD-MM HH:mm:ss'),
                    0,
                    0,
                    true
                ),
            ];
            JobSeeder.LOGGER.info('Job model truncation started before seeding');
            await Job.destroy({ truncate: true });
            JobSeeder.LOGGER.info('Job model truncation completed');
            JobSeeder.LOGGER.info('Job seeding process started');
            await Job.bulkCreate(userDtos);
            JobSeeder.LOGGER.info('Job seeding process completed');
        } catch (error) {
            JobSeeder.LOGGER.error(Errors.SEED_ERROR.description, ':', Errors.SEED_ERROR.description, error);
        }
    }
}
