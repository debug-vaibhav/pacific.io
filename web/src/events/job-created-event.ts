import { Events, JobCreatedEvent } from '@pacific.io/common';

export class JobCreated implements JobCreatedEvent {
    event: Events.JobCreated;
    data: any;

    constructor(data: any) {
        this.event = Events.JobCreated;
        this.data = data;
    }
}
