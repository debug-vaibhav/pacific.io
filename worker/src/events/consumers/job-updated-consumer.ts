import { Consumer, JobUpdatedEvent, Queues } from '@pacific.io/common';

export default class JobUpdatedConsumer extends Consumer<JobUpdatedEvent> {
    queue = Queues.JobUpdated;
    onMessage(data: JobUpdatedEvent): void {
        console.log('Event data - ', data);
    }
}
