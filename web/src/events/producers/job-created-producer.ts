import { Exchanges, Producer, JobCreatedEvent } from '@pacific.io/common';
import { RabbitMQInstance } from '../../resources/rabbitmq';

export class JobCreatedProducer extends Producer<JobCreatedEvent> {
    exchange: Exchanges = Exchanges.JobCreated;

    constructor() {
        super(RabbitMQInstance);
    }
}
