import { Events, UserCreatedEvent } from '@pacific.io/common';

export class UserCreated implements UserCreatedEvent {
    event: Events.UserCreated;
    data: any;

    constructor(data: any) {
        this.event = Events.UserCreated;
        this.data = data;
    }
}
