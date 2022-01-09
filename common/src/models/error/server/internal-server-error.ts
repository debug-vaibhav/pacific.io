import BaseError from '../base-error';
import CustomError from '../custom-error';
import { Errors } from '../../../constants/errors';

export class InternalServerError extends CustomError {
    statusCode = 500;
    error: any;

    constructor(error: any) {
        super(Errors.NOT_FOUND.header);
        Object.setPrototypeOf(this, InternalServerError.prototype);
        this.error = error;
    }

    serializeErrors(): BaseError[] {
        return [new BaseError(Errors.SERVER.description, this.error)];
    }
}
