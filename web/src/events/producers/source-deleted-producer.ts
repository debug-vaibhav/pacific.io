import { Exchanges, Producer, SourceDeletedEvent } from '@pacific.io/common';
import { RabbitMQInstance } from '../../resources/rabbitmq';

export class SourceDeletedProducer extends Producer<SourceDeletedEvent> {
    exchange: Exchanges = Exchanges.SourceDeleted;

    constructor() {
        super(RabbitMQInstance);
    }
}
