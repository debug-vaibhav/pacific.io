import Transport from 'winston-transport';
import { RabbitMQ } from './rabbitmq';
import { Exchanges } from '../events/exchanges';

export abstract class RabbitMQTransport extends Transport {
    private _rabbitMQ: RabbitMQ;
    abstract exchange: Exchanges;

    constructor(options: any, rabbitMQ: RabbitMQ) {
        super(options);
        this._rabbitMQ = rabbitMQ;
    }

    async log(event: string, callback?: any) {
        setImmediate(() => {
            this.emit('logged', event);
        });
        await this._rabbitMQ.channel.publish(this.exchange, this.exchange, Buffer.from(JSON.stringify(event)));
        callback();
    }
}
