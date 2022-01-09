import { Exchanges, Producer } from '@pacific.io/common';
import { RabbitMQInstance } from '../resources/rabbitmq';
import { UserEvent } from './user-event';

export class UserProducer extends Producer<UserEvent> {
    exchange: Exchanges = Exchanges.User;

    constructor() {
        super(RabbitMQInstance);
    }
}
