import { ValidationError } from 'express-validator';
import BaseError from '../base-error';
import CustomError from '../custom-error';
import { Errors } from '../../../constants/errors';

export class RequestValidationError extends CustomError {
    statusCode = 400;
    error: any;
    private errors: ValidationError[];

    constructor(errors: ValidationError[]) {
        super(Errors.REQUEST_VALIDATION_ERROR.header);
        Object.setPrototypeOf(this, RequestValidationError.prototype);
        this.errors = errors;
    }

    serializeErrors(): BaseError[] {
        const errors = this.errors.map((error) => {
            return new BaseError(Errors.REQUEST_VALIDATION_ERROR.description, error);
        });
        return errors;
    }
}
