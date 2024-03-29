import { Events } from './events';
import { Event } from '../models/interfaces/event';

export interface SourceUpdatedEvent extends Event {
    event: Events.SourceUpdated;
    data: any;
}
