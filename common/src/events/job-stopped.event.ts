import { Events } from './events';
import { Event } from '../models/interfaces/event';

export interface JobStoppedEvent extends Event {
    event: Events.JobStopped;
    data: any;
}
