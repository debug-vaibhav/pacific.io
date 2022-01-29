import { Consumer, JobSkippedEvent, Queues } from '@pacific.io/common';

export default class JobSkippedConsumer extends Consumer<JobSkippedEvent> {
    queue = Queues.JobSkipped;
    onMessage(data: JobSkippedEvent): void {
        console.log('Event data - ', data);
    }
}
