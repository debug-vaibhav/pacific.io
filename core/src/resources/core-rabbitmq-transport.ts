import { RabbitMQTransport, Exchanges } from '@pacific.io/common';

export class CoreRabbitMQTransport extends RabbitMQTransport {
    exchange: Exchanges = Exchanges.Core;
}
