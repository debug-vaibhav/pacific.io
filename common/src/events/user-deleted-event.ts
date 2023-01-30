import { Events } from './events';
import { Event } from '../models/interfaces/event';

export interface UserDeletedEvent extends Event {
    event: Events.UserDeleted;
    data: any;
}
