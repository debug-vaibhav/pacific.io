import winston from 'winston';
import { Queues, Consumer } from '@pacific.io/common';
import { UserEvent } from '../user-event';
import { RabbitMQInstance } from '../../resources/rabbitmq';
import { LoggerInstance } from '../../resources/logger';

export class UserConsumer extends Consumer<UserEvent> {
    queue: Queues = Queues.User;
    static LOGGER: winston.Logger | undefined = LoggerInstance.logger;

    constructor() {
        super(RabbitMQInstance);
    }

    onMessage(data: UserEvent): void {
        UserConsumer.LOGGER?.info(data);
    }
}
