import moment from 'moment';
import { UserDto } from '@pacific.io/common';
import { Logger } from 'winston';
import { Errors } from '@pacific.io/common';
import { LoggerInstance } from '../resources/logger';
import User from '../models/user';

export default class UserSeeder {
    private static LOGGER: Logger = LoggerInstance.logger;

    public static async seed(): Promise<void> {
        try {
            const userDtos: UserDto[] = [
                new UserDto('Admin', 'User', 'admin@pacific.io', 'admin', 1, false, true, moment().format('YYYY-DD-MM HH:mm:ss'), moment().format('YYYY-DD-MM HH:mm:ss'), 0, 0),
            ];
            UserSeeder.LOGGER.info('User model truncation started before seeding');
            await User.destroy({ truncate: true, cascade: true });
            UserSeeder.LOGGER.info('User model truncation completed');
            UserSeeder.LOGGER.info('User seeding process started');
            const size = await User.count();
            if (size === 0) {
                await User.bulkCreate(userDtos, { individualHooks: true });
            }
            UserSeeder.LOGGER.info('User seeding process completed');
        } catch (error) {
            console.log(error);
            UserSeeder.LOGGER.error(Errors.SEED_ERROR.description, ':', Errors.SEED_ERROR.description, error);
        }
    }
}
