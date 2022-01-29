import { Consumer, JobKilledEvent, Queues } from '@pacific.io/common';

export default class JobKilledConsumer extends Consumer<JobKilledEvent> {
    queue = Queues.JobKilled;

    onMessage(data: JobKilledEvent): void {
        console.log('Event data - ', data);
    }
}
