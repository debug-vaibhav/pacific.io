import { Connection } from 'amqplib';
import { Consumer } from './consumer';
import { Queues } from './queues';
import { UserEvent } from './user.event';
import CONSTANTS from '../config/constants';
import Event from '../models/dao/event.model';
import DatabaseError from '../models/error/database-error';

export class UserConsumer extends Consumer<UserEvent> {
    queue: Queues = Queues.User;

    constructor(connection: Connection) {
        super(connection);
    }

    async onMessage(userEvent: UserEvent) {
        try {
            await Event.create({ name: userEvent.event, level: CONSTANTS.LEVEL.INFO, payload: JSON.stringify(userEvent.data), loggedBy: 'SYSTEM' });
        } catch (error) {
            console.error(new DatabaseError());
        }
    }
}
