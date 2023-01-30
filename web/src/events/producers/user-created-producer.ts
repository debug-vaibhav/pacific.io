import { Exchanges, Producer, UserCreatedEvent } from '@pacific.io/common';
import { RabbitMQInstance } from '../../resources/rabbitmq';

export class UserCreatedProducer extends Producer<UserCreatedEvent> {
    exchange: Exchanges = Exchanges.UserCreated;

    constructor() {
        super(RabbitMQInstance);
    }
}
