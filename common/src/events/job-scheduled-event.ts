import { Events } from '../events/events';
import { Event } from '../models/interfaces/event';

export interface JobScheduledEvent extends Event {
    event: Events.JobScheduled;
    data: any;
}
