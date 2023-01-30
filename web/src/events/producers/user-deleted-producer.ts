import { Exchanges, Producer, UserDeletedEvent } from '@pacific.io/common';
import { RabbitMQInstance } from '../../resources/rabbitmq';

export class UserDeletedProducer extends Producer<UserDeletedEvent> {
    exchange: Exchanges = Exchanges.UserDeleted;

    constructor() {
        super(RabbitMQInstance);
    }
}
