import { RabbitMQTransport, Exchanges } from '@pacific.io/common';

export class UserRabbitMQTransport extends RabbitMQTransport {
    exchange: Exchanges = Exchanges.User;
}
