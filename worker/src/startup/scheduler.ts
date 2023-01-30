<<<<<<< HEAD
import { CronJob } from "cron";
import moment from "moment";
import { Logger } from 'winston';
import JobService from "../services/job";
=======
import { CronJob } from 'cron';
import config from 'config';
import { Logger } from 'winston';
>>>>>>> 6ffa7946a5b16d23ac09b6a73cdce49c0bb7e932
import { LoggerInstance } from '../resources/logger';

export default class Scheduler {
    private static LOGGER: Logger = LoggerInstance.logger;
<<<<<<< HEAD
    private static jobService: JobService = new JobService();

    static executeJobs() {
        Scheduler.LOGGER.info(`Scheduler triggered at ${moment().format('YYYY-MM-DD hh:mm:ss')}`);
    }

    static start() {
        new CronJob(
            '*/15 * * * *',
            Scheduler.executeJobs,
            null,
            true,
            'Asia/Kolkata'
        );
    }

}
=======
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
>>>>>>> 6ffa7946a5b16d23ac09b6a73cdce49c0bb7e932
