import { Events, SourceUpdatedEvent } from '@pacific.io/common';

export class SourceUpdated implements SourceUpdatedEvent {
    event: Events.SourceUpdated;
    data: any;

    constructor(data: any) {
        this.event = Events.SourceUpdated;
        this.data = data;
    }
}
