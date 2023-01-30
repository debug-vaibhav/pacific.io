import moment from 'moment';
import { ActionDto } from '@pacific.io/common';
import { Logger } from 'winston';
import { Errors } from '@pacific.io/common';
import { LoggerInstance } from '../resources/logger';
import Action from '../models/action';

export default class ActionSeeder {
    private static LOGGER: Logger = LoggerInstance.logger;

    public static async seed(): Promise<void> {
        try {
            const actionDtos: ActionDto[] = [
                new ActionDto('create', moment().format('YYYY-DD-MM HH:mm:ss'), moment().format('YYYY-DD-MM HH:mm:ss'), 0, 0, false),
                new ActionDto('read', moment().format('YYYY-DD-MM HH:mm:ss'), moment().format('YYYY-DD-MM HH:mm:ss'), 0, 0, false),
                new ActionDto('update', moment().format('YYYY-DD-MM HH:mm:ss'), moment().format('YYYY-DD-MM HH:mm:ss'), 0, 0, false),
                new ActionDto('delete', moment().format('YYYY-DD-MM HH:mm:ss'), moment().format('YYYY-DD-MM HH:mm:ss'), 0, 0, false),
                new ActionDto('killed', moment().format('YYYY-DD-MM HH:mm:ss'), moment().format('YYYY-DD-MM HH:mm:ss'), 0, 0, false),
                new ActionDto('resumed', moment().format('YYYY-DD-MM HH:mm:ss'), moment().format('YYYY-DD-MM HH:mm:ss'), 0, 0, false),
                new ActionDto('running', moment().format('YYYY-DD-MM HH:mm:ss'), moment().format('YYYY-DD-MM HH:mm:ss'), 0, 0, false),
                new ActionDto('skipped', moment().format('YYYY-DD-MM HH:mm:ss'), moment().format('YYYY-DD-MM HH:mm:ss'), 0, 0, false),
                new ActionDto('scheduled', moment().format('YYYY-DD-MM HH:mm:ss'), moment().format('YYYY-DD-MM HH:mm:ss'), 0, 0, false),
                new ActionDto('stopped', moment().format('YYYY-DD-MM HH:mm:ss'), moment().format('YYYY-DD-MM HH:mm:ss'), 0, 0, false),
            ];
            ActionSeeder.LOGGER.info('Action model truncation started before seeding');
            await Action.destroy({ truncate: true, cascade: true });
            ActionSeeder.LOGGER.info('Action model truncation completed');
            ActionSeeder.LOGGER.info('Action seeding process started');
            const size = await Action.count();
            if (size === 0) {
                await Action.bulkCreate(actionDtos);
            }
            ActionSeeder.LOGGER.info('Action seeding process completed');
        } catch (error) {
            ActionSeeder.LOGGER.error(Errors.SEED_ERROR.description, ':', Errors.SEED_ERROR.description, error);
        }
    }
}
