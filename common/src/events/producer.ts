import { Event } from '../models/interfaces/event';
import { Exchanges } from './exchanges';
import { RabbitMQ } from '../resources/rabbitmq';
import { RabbitMQError } from '../models/error/connection/rabbitmq-error';

export abstract class Producer<T extends Event> {
    private _rabbitMQ: RabbitMQ;
    abstract exchange: Exchanges;

    constructor(rabbitMQ: RabbitMQ) {
        this._rabbitMQ = rabbitMQ;
    }

    async publish(event: T, routingKey?: string) {
        if (this._rabbitMQ.connection) {
            await this._rabbitMQ.channel.publish(this.exchange, routingKey || this.exchange, Buffer.from(JSON.stringify(event)));
            return;
        }
        throw new RabbitMQError('RabbitMQ Connection Failed');
    }
}
