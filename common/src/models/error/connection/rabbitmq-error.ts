import BaseError from '../base-error';
import CustomError from '../custom-error';
import { Errors } from '../../../constants/errors';

export class RabbitMQError extends CustomError {
    statusCode = 500;
    error: any;

    constructor(error: any) {
        super(Errors.RABBITMQ_CONNECTION.header);
        Object.setPrototypeOf(this, RabbitMQError.prototype);
        this.error = error;
    }

    serializeErrors(): BaseError[] {
        const errors = [new BaseError(Errors.RABBITMQ_CONNECTION.description, this.error)];
        return errors;
    }
}
