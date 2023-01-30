import { Events } from './events';
import { Event } from '../models/interfaces/event';

export interface UserCreatedEvent extends Event {
    event: Events.UserCreated;
    data: any;
}
