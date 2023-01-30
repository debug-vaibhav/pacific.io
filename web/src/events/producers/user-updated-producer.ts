import { Exchanges, Producer, UserUpdatedEvent } from '@pacific.io/common';
import { RabbitMQInstance } from '../../resources/rabbitmq';

export class UserUpdatedProducer extends Producer<UserUpdatedEvent> {
    exchange: Exchanges = Exchanges.UserUpdated;

    constructor() {
        super(RabbitMQInstance);
    }
}
