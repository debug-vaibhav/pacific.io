import { Events } from './events';
import { Event } from '../models/interfaces/event';

export interface SourceDeletedEvent extends Event {
    event: Events.SourceDeleted;
    data: any;
}
