import BaseError from '../base-error';
import CustomError from '../custom-error';
import { Errors } from '../../../constants/errors';

export class DatabaseError extends CustomError {
    statusCode = 500;
    error: any;

    constructor(error: any) {
        super(Errors.DB_CONNECTION.header);
        Object.setPrototypeOf(this, DatabaseError.prototype);
        this.error = error;
    }

    serializeErrors(): BaseError[] {
        const errors = [new BaseError(Errors.DB_CONNECTION.description, this.error)];
        return errors;
    }
}
