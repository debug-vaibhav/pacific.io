import { CronJob } from "cron";
import moment from "moment";
import { Logger } from 'winston';
import JobService from "../services/job";
import { LoggerInstance } from '../resources/logger';

export default class Scheduler {
    private static LOGGER: Logger = LoggerInstance.logger;
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