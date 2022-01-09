import { Connection } from 'amqplib';
import { Event } from './event';
import { Queues } from './queues';

export abstract class Consumer<T extends Event> {
    abstract queue: Queues;
    protected connection: Connection;

    abstract onMessage(data: T): void;

    constructor(connection: Connection) {
        this.connection = connection;
    }

    async consume() {
        if (this.connection) {
            const channel = await this.connection.createChannel();
            channel.consume(
                this.queue,
                (msg: any) => {
                    const buffer: Buffer = msg.content;
                    channel.ack(msg);
                    this.onMessage(JSON.parse(buffer.toString()));
                },
                {
                    noAck: false,
                }
            );
        } else {
            throw new Error('Cannot connect to RabbitMQ');
        }
    }
}
