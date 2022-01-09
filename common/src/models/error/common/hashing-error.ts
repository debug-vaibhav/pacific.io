import BaseError from '../base-error';
import CustomError from '../custom-error';
import { Errors } from '../../../constants/errors';

export class HashingError extends CustomError {
    statusCode = 500;
    error: any;

    constructor(error: any) {
        super(Errors.HASHING_ERROR.header);
        Object.setPrototypeOf(this, HashingError.prototype);
        this.error = error;
    }

    serializeErrors(): BaseError[] {
        return [new BaseError(Errors.HASHING_ERROR.description, this.error)];
    }
}
