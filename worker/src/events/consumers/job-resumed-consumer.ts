import { Consumer, JobResumedEvent, Queues } from '@pacific.io/common';

export default class JobResumedConsumer extends Consumer<JobResumedEvent> {
    queue = Queues.JobResumed;

    onMessage(data: JobResumedEvent): void {
        console.log('Event data - ', data);
    }
}
