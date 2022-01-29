import { Exchanges, Producer, JobResumedEvent } from '@pacific.io/common';
import { RabbitMQInstance } from '../../resources/rabbitmq';

export class JobResumedProducer extends Producer<JobResumedEvent> {
    exchange: Exchanges = Exchanges.JobResumed;

    constructor() {
        super(RabbitMQInstance);
    }
}
