import IMessage from '../models/interfaces/message';

export class Messages {
    static SERVICE_LIVE: IMessage = {
        header: 'ServiceLive',
        description: 'Service is live',
    };
    static USER_CREATED: IMessage = {
        header: 'UserCreation',
        description: 'User created successfully',
    };
    static LOGIN_SUCCESS: IMessage = {
        header: 'LoginSuccess',
        description: 'User logged in successfully',
    };
    static RABBITMQ_CONNECTION: IMessage = {
        header: 'RabbitMQConnection',
        description: 'Successfully Connected to RabbitMQ',
    };
    static DATA_FETCHED: IMessage = {
        header: 'DataFetched',
        description: 'Data fetched successfully',
    };
}
