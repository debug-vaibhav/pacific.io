import { Consumer, JobCreatedEvent, Queues } from '@pacific.io/common';

export default class JobCreatedConsumer extends Consumer<JobCreatedEvent> {
    queue = Queues.JobCreated;
    onMessage(data: JobCreatedEvent): void {
        console.log('Event data - ', data);
    }
}
