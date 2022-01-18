import { Exchanges, Producer } from '@pacific.io/common';
import { RabbitMQInstance } from '../../resources/rabbitmq';
import { WorkerEvent } from '../worker-event';

export class WorkerProducer extends Producer<WorkerEvent> {
    exchange: Exchanges = Exchanges.Worker;

    constructor() {
        super(RabbitMQInstance);
    }
}
