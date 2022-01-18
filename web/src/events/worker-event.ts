import { Events, Event } from '@pacific.io/common';

export class WorkerEvent implements Event {
    event: Events;
    data: any;

    constructor(event: Events, data: any) {
        this.event = event;
        this.data = data;
    }
}
