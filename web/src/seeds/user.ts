import { Logger } from 'winston';
import { Errors, UserDto, DateTimeUtility } from '@pacific.io/common';
import { LoggerInstance } from '../resources/logger';
import User from '../models/user';

export default class UserSeeder {
    private static LOGGER: Logger = LoggerInstance.logger;

    public static async seed(): Promise<void> {
        try {
            await User.initialize();
            await User.sync({ alter: true });
            UserSeeder.LOGGER.info('User model truncation started before seeding');
            await User.destroy({ truncate: true });
            UserSeeder.LOGGER.info('User model truncation completed');
            UserSeeder.LOGGER.info('User seeding process started');
            const userDtos: UserDto[] = [
                new UserDto('System', '', 'system@pacific.io', 'system123', 1, false, true, DateTimeUtility.getCurrentDateTime(), DateTimeUtility.getCurrentDateTime(), 0, 0),
            ];
            await User.bulkCreate(userDtos);
            UserSeeder.LOGGER.info('User seeding process completed');
        } catch (error) {
            console.log(error);
            UserSeeder.LOGGER.error(Errors.SEED_ERROR.description, ':', Errors.SEED_ERROR.description, error);
        }
    }
}
