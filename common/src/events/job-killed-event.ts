import { Events } from './events';
import { Event } from '../models/interfaces/event';

export interface JobKilledEvent extends Event {
    event: Events.JobKilled;
    data: any;
}
