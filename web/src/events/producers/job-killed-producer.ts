import { Exchanges, Producer, JobKilledEvent } from '@pacific.io/common';
import { RabbitMQInstance } from '../../resources/rabbitmq';

export class JobKilledProducer extends Producer<JobKilledEvent> {
    exchange: Exchanges = Exchanges.JobKilled;

    constructor() {
        super(RabbitMQInstance);
    }
}
