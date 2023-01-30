import { Consumer, JobCreatedEvent, Queues } from '@pacific.io/common';
import JobService from '../../services/job';

export default class JobCreatedConsumer extends Consumer<JobCreatedEvent> {
    queue = Queues.JobCreated;

    private static jobService: JobService = new JobService();

    async onMessage(data: JobCreatedEvent): Promise<void> {
        try {
            console.log(data);
            await JobCreatedConsumer.jobService.create(data.data);
        } catch (error) {
            throw error;
        }
    }
}
