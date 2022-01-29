import { Events } from '../events/events';
import { Event } from '../models/interfaces/event';

export interface JobUpdatedEvent extends Event {
    event: Events.JobUpdated;
    data: any;
}
