import { Events, JobDeletedEvent } from '@pacific.io/common';

export class JobDeleted implements JobDeletedEvent {
    event: Events.JobDeleted;
    data: any;

    constructor(data: any) {
        this.event = Events.JobDeleted;
        this.data = data;
    }
}
