import { Exchanges, Producer, SourceCreatedEvent } from '@pacific.io/common';
import { RabbitMQInstance } from '../../resources/rabbitmq';

export class SourceCreatedProducer extends Producer<SourceCreatedEvent> {
    exchange: Exchanges = Exchanges.SourceCreated;

    constructor() {
        super(RabbitMQInstance);
    }
}
