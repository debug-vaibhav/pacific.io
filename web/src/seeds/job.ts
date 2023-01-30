<<<<<<< HEAD
=======
import moment from 'moment';
import { JobDto } from '@pacific.io/common';
>>>>>>> 6ffa7946a5b16d23ac09b6a73cdce49c0bb7e932
import { Logger } from 'winston';
import { Errors, JobDto, DateTimeUtility } from '@pacific.io/common';
import { LoggerInstance } from '../resources/logger';
import Job from '../models/job';

export default class JobSeeder {
    private static LOGGER: Logger = LoggerInstance.logger;

    public static async seed(): Promise<void> {
        try {
            await Job.initialize();
            await Job.sync({ alter: true });
            const userDtos: JobDto[] = [
                new JobDto(
                    'MySQL data job',
                    'this job extracts data from mysql databases',
                    'Asia/Kolkata',
                    '*/5 * * * *',
                    'SELECT * FROM dbo.users',
                    DateTimeUtility.getCurrentDateTime(),
                    DateTimeUtility.getCurrentDateTime(),
                    0,
                    0,
                    true
                ),
                new JobDto(
                    'MySQL data job',
                    'this job extracts data from sql server databases',
                    'Asia/Kolkata',
                    '*/10 * * * *',
                    'SELECT * FROM dbo.users',
                    DateTimeUtility.getCurrentDateTime(),
                    DateTimeUtility.getCurrentDateTime(),
                    0,
                    0,
                    true
                ),
            ];
            JobSeeder.LOGGER.info('Job model truncation started before seeding');
            await Job.destroy({ truncate: true });
            JobSeeder.LOGGER.info('Job model truncation completed');
            JobSeeder.LOGGER.info('Job seeding process started');
            const size = await Job.count();
            if (size === 0) {
                await Job.bulkCreate(userDtos);
            }
            JobSeeder.LOGGER.info('Job seeding process completed');
        } catch (error) {
            JobSeeder.LOGGER.error(Errors.SEED_ERROR.description, ':', Errors.SEED_ERROR.description, error);
        }
    }
}
