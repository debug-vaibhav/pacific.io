import { Consumer, JobDeletedEvent, Queues } from '@pacific.io/common';

export default class JobDeletedConsumer extends Consumer<JobDeletedEvent> {
    queue = Queues.JobDeleted;
    onMessage(data: JobDeletedEvent): void {
        console.log('Event data - ', data);
    }
}
