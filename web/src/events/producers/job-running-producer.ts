import { Exchanges, Producer, JobRunningEvent } from '@pacific.io/common';
import { RabbitMQInstance } from '../../resources/rabbitmq';

export class JobRunningProducer extends Producer<JobRunningEvent> {
    exchange: Exchanges = Exchanges.JobRunning;

    constructor() {
        super(RabbitMQInstance);
    }
}
