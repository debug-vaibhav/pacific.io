import { Events } from './events';
import { Event } from '../models/interfaces/event';

export interface JobScheduledEvent extends Event {
    event: Events.JobScheduled;
    data: any;
}
