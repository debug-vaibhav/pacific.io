import { Exchanges, Producer, JobDeletedEvent } from '@pacific.io/common';
import { RabbitMQInstance } from '../../resources/rabbitmq';

export class JobDeletedProducer extends Producer<JobDeletedEvent> {
    exchange: Exchanges = Exchanges.JobDeleted;

    constructor() {
        super(RabbitMQInstance);
    }
}
