import { Exchanges, Producer, SourceUpdatedEvent } from '@pacific.io/common';
import { RabbitMQInstance } from '../../resources/rabbitmq';

export class SourceUpdatedProducer extends Producer<SourceUpdatedEvent> {
    exchange: Exchanges = Exchanges.SourceUpdated;

    constructor() {
        super(RabbitMQInstance);
    }
}
