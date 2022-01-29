import { Events, SourceDeletedEvent } from '@pacific.io/common';

export class SourceDeleted implements SourceDeletedEvent {
    event: Events.SourceDeleted;
    data: any;

    constructor(data: any) {
        this.event = Events.SourceDeleted;
        this.data = data;
    }
}
