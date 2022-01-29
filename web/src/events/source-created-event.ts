import { Events, SourceCreatedEvent } from '@pacific.io/common';

export class SourceCreated implements SourceCreatedEvent {
    event: Events.SourceCreated;
    data: any;

    constructor(data: any) {
        this.event = Events.SourceCreated;
        this.data = data;
    }
}
