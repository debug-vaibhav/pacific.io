import { Consumer, JobScheduledEvent, Queues } from '@pacific.io/common';

export default class JobScheduledConsumer extends Consumer<JobScheduledEvent> {
    queue = Queues.JobScheduled;
    onMessage(data: JobScheduledEvent): void {
        console.log('Event data - ', data);
    }
}
