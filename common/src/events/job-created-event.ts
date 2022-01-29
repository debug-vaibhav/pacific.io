import { Events } from '../events/events';
import { Event } from '../models/interfaces/event';

export interface JobCreatedEvent extends Event {
    event: Events.JobCreated;
    data: any;
}
