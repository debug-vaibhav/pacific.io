import { Events } from './events';
import { Event } from '../models/interfaces/event';

export interface UserUpdatedEvent extends Event {
    event: Events.UserUpdated;
    data: any;
}
