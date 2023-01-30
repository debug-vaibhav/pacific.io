import { Events, UserDeletedEvent } from '@pacific.io/common';

export class UserDeleted implements UserDeletedEvent {
    event: Events.UserDeleted;
    data: any;

    constructor(data: any) {
        this.event = Events.UserDeleted;
        this.data = data;
    }
}
