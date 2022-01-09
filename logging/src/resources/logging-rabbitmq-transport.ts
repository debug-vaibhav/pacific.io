import { RabbitMQTransport, Exchanges } from '@pacific.io/common';

export class LoggingRabbitMQTransport extends RabbitMQTransport {
    exchange: Exchanges = Exchanges.Logging;
}
