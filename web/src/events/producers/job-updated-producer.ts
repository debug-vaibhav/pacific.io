import { Exchanges, Producer, JobUpdatedEvent } from '@pacific.io/common';
import { RabbitMQInstance } from '../../resources/rabbitmq';

export class JobUpdatedProducer extends Producer<JobUpdatedEvent> {
    exchange: Exchanges = Exchanges.JobUpdated;

    constructor() {
        super(RabbitMQInstance);
    }
}
