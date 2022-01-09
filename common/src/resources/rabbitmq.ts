import amqp, { Channel, Connection } from 'amqplib';
import { RabbitMQError } from '../models/error/connection/rabbitmq-error';

export class RabbitMQ {
    private static instance: RabbitMQ;
    private _connection?: Connection;
    private _channel?: Channel;

    private constructor() {
        /**
         * Nothing to add
         */
    }

    public static getInstance(): RabbitMQ {
        if (!RabbitMQ.instance) {
            RabbitMQ.instance = new RabbitMQ();
        }
        return RabbitMQ.instance;
    }

    public get connection() {
        if (!this._connection) {
            throw new RabbitMQError('RabbitMQ Connection Failed');
        }
        return this._connection;
    }

    public get channel() {
        if (!this._channel) {
            throw new RabbitMQError('RabbitMQ Connection Failed');
        }
        return this._channel;
    }

    public async connect(url: string): Promise<void> {
        this._connection = await amqp.connect(url);
        this._channel = await this._connection.createChannel();
    }
}
