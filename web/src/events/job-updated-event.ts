import { Events, JobUpdatedEvent } from '@pacific.io/common';

export class JobUpdated implements JobUpdatedEvent {
    event: Events.JobUpdated;
    data: any;

    constructor(data: any) {
        this.event = Events.JobUpdated;
        this.data = data;
    }
}
