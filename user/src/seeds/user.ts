import moment from 'moment';
import { Logger } from 'winston';
import { Errors } from '@pacific.io/common';
import { LoggerInstance } from '../resources/logger';
import User from '../models/dao/user';
import UserDto from '../models/dto/user';

export default class UserSeeder {
    private static LOGGER: Logger = LoggerInstance.logger;

    public static async seed(): Promise<void> {
        try {
            const userDtos: UserDto[] = [
                new UserDto('System', '', 'system@pacific.io', 'system123', 1, false, true, moment().format('YYYY-DD-MM HH:mm:ss'), moment().format('YYYY-DD-MM HH:mm:ss'), 0, 0),
            ];
            await User.initialize();
            UserSeeder.LOGGER.info('User model truncation started before seeding');
            await User.destroy({ truncate: true });
            UserSeeder.LOGGER.info('User model truncation completed');
            UserSeeder.LOGGER.info('User seeding process started');
            await User.bulkCreate(userDtos);
            UserSeeder.LOGGER.info('User seeding process completed');
        } catch (error) {
            UserSeeder.LOGGER.error(Errors.SEED_ERROR.description, ':', Errors.SEED_ERROR.description, error);
        }
    }
}
