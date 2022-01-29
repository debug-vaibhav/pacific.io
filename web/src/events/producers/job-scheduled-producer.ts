import { Exchanges, Producer, JobScheduledEvent } from '@pacific.io/common';
import { RabbitMQInstance } from '../../resources/rabbitmq';

export class JobScheduledProducer extends Producer<JobScheduledEvent> {
    exchange: Exchanges = Exchanges.JobScheduled;

    constructor() {
        super(RabbitMQInstance);
    }
}
