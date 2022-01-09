import BaseError from '../base-error';
import CustomError from '../custom-error';
import { Errors } from '../../../constants/errors';

export class NotFoundError extends CustomError {
    statusCode = 404;
    error: any;

    constructor(error: any) {
        super(Errors.NOT_FOUND.header);
        Object.setPrototypeOf(this, NotFoundError.prototype);
        this.error = error;
    }

    serializeErrors(): BaseError[] {
        return [new BaseError(Errors.NOT_FOUND.description, this.error)];
    }
}
