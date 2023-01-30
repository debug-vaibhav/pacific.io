import { Events, UserUpdatedEvent } from '@pacific.io/common';

export class UserUpdated implements UserUpdatedEvent {
    event: Events.UserUpdated;
    data: any;

    constructor(data: any) {
        this.event = Events.UserUpdated;
        this.data = data;
    }
}
