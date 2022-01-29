import { Events } from '../events/events';
import { Event } from '../models/interfaces/event';

export interface JobDeletedEvent extends Event {
    event: Events.JobDeleted;
    data: any;
}
