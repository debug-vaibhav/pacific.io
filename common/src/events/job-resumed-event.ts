import { Events } from '../events/events';
import { Event } from '../models/interfaces/event';

export interface JobResumedEvent extends Event {
    event: Events.JobResumed;
    data: any;
}
