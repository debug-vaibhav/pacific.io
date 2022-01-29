import { Events } from '../events/events';
import { Event } from '../models/interfaces/event';

export interface JobRunningEvent extends Event {
    event: Events.JobRunning;
    data: any;
}
