import { Event } from '../models/interfaces/event';
import { Queues } from './queues';
import { RabbitMQ } from '../resources/rabbitmq';
import { RabbitMQError } from '../models/error/connection/rabbitmq-error';

export abstract class Consumer<T extends Event> {
    private _rabbitMQ: RabbitMQ;
    abstract queue: Queues;
    abstract onMessage(data: T): void;

    constructor(rabbitMQ: RabbitMQ) {
        this._rabbitMQ = rabbitMQ;
    }

    async consume() {
        if (this._rabbitMQ.connection) {
            this._rabbitMQ.channel.consume(
                this.queue,
                (msg: any) => {
                    const buffer: Buffer = msg.content;
                    try {
                        this._rabbitMQ.channel.ack(msg);
                        this.onMessage(JSON.parse(buffer.toString()));
                    } catch (error) {
                        console.log(error);
                    }
                },
                {
                    noAck: false,
                }
            );
        } else {
            throw new RabbitMQError('RabbitMQ Connection Failed');
        }
    }
}
