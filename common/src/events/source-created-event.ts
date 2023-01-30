import { Events } from './events';
import { Event } from '../models/interfaces/event';

export interface SourceCreatedEvent extends Event {
    event: Events.SourceCreated;
    data: any;
}
