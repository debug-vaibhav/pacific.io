import { IError } from '../models/interfaces/error';

export class Errors {
    static GENERAL: IError = {
        header: 'General Error',
        description: 'Something went wrong',
    };
    static SERVER: IError = {
        header: 'Internal Server Error',
        description: 'Internal server error',
    };
    static DB_CONNECTION: IError = {
        header: 'Database Connection Error',
        description: 'Failed to connect to database',
    };
    static RABBITMQ_CONNECTION: IError = {
        header: 'RabbitMQ Connection Error',
        description: 'Failed to connect to RabbitMQ',
    };
    static NOT_FOUND: IError = {
        header: 'Not Found Error',
        description: 'Failed to find the requested resource',
    };
    static REQUEST_VALIDATION_ERROR: IError = {
        header: 'Request Validation Error',
        description: 'Failed to validate request',
    };
    static APP_ERROR: IError = {
        header: 'Application Error',
        description: 'Failed to start application',
    };
    static MODEL_SYNC_ERROR: IError = {
        header: 'Database Model(s) Sync Error',
        description: 'Failed to sync sequelize models to database',
    };
    static HASHING_ERROR: IError = {
        header: 'Hashing Error',
        description: 'Failed to hash the password',
    };
    static CREATE_ERROR: IError = {
        header: 'Create Error',
        description: 'Failed to create the',
    };
    static READ_ERROR: IError = {
        header: 'Read Error',
        description: 'Failed to read the',
    };
    static UPDATE_ERROR: IError = {
        header: 'Update Error',
        description: 'Failed to update the',
    };
    static DELETE_ERROR: IError = {
        header: 'Delete Error',
        description: 'Failed to delete the',
    };
    static EXISTS_ERROR: IError = {
        header: 'Exists Error',
        description: 'already exists',
    };
    static NOT_EXISTS_ERROR: IError = {
        header: "Doesn't Exists Error",
        description: "doesn't exists",
    };
    static AUTHENTICATION_ERROR: IError = {
        header: 'Authentication Error',
        description: 'Failed to authenticate due to wrong email or password',
    };
    static AUTHORIZATION_ERROR: IError = {
        header: 'Authorization Error',
        description: 'Failed to authorize the user',
    };
    static MISMATCH_ERROR: IError = {
        header: 'Mismatch Error',
        description: "didn't match",
    };
    static SEED_ERROR: IError = {
        header: 'Seeding Error',
        description: 'Model seeding failed',
    };
}
