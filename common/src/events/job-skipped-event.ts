import { Events } from './events';
import { Event } from '../models/interfaces/event';

export interface JobSkippedEvent extends Event {
    event: Events.JobSkipped;
    data: any;
}
