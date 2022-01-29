import { Consumer, JobRunningEvent, Queues } from '@pacific.io/common';

export default class JobRunningConsumer extends Consumer<JobRunningEvent> {
    queue = Queues.JobRunning;

    onMessage(data: JobRunningEvent): void {
        console.log('Event data - ', data);
    }
}
