import { Exchanges, Producer, JobStoppedEvent } from '@pacific.io/common';
import { RabbitMQInstance } from '../../resources/rabbitmq';

export class JobStoppedProducer extends Producer<JobStoppedEvent> {
    exchange: Exchanges = Exchanges.JobStopped;

    constructor() {
        super(RabbitMQInstance);
    }
}
