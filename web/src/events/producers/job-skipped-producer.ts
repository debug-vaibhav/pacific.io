import { Exchanges, Producer, JobSkippedEvent } from '@pacific.io/common';
import { RabbitMQInstance } from '../../resources/rabbitmq';

export class JobSkippedProducer extends Producer<JobSkippedEvent> {
    exchange: Exchanges = Exchanges.JobSkipped;

    constructor() {
        super(RabbitMQInstance);
    }
}
