import { Consumer, JobStoppedEvent, Queues } from '@pacific.io/common';

export default class JobStoppedConsumer extends Consumer<JobStoppedEvent> {
    queue = Queues.JobStopped;
    onMessage(data: JobStoppedEvent): void {
        console.log('Event data - ', data);
    }
}
