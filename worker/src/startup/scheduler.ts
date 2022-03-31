import { CronJob } from 'cron';
import config from 'config';
import { Logger } from 'winston';
import { LoggerInstance } from '../resources/logger';

export default class Scheduler {
    private static LOGGER: Logger = LoggerInstance.logger;
    static start() {
        const job = new CronJob(
            config.get('scheduler.cronExpression'),
            () => {
                Scheduler.LOGGER.info('You will see this message every 1 minutes');
            },
            null,
            true,
            config.get('scheduler.timezone')
        );
        job.start();
    }
}
