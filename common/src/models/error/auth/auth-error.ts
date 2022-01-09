import BaseError from '../base-error';
import CustomError from '../custom-error';
import { Errors } from '../../../constants/errors';

export class AuthenticationError extends CustomError {
    statusCode = 401;
    error: any;

    constructor(error: any) {
        super(Errors.AUTHENTICATION_ERROR.header);
        Object.setPrototypeOf(this, AuthenticationError.prototype);
        this.error = error;
    }

    serializeErrors(): BaseError[] {
        return [new BaseError(Errors.AUTHENTICATION_ERROR.description, this.error)];
    }
}

export class AuthorizationError extends CustomError {
    statusCode = 401;
    error: any;

    constructor(error: any) {
        super(Errors.AUTHORIZATION_ERROR.header);
        Object.setPrototypeOf(this, AuthorizationError.prototype);
        this.error = error;
    }

    serializeErrors(): BaseError[] {
        return [new BaseError(Errors.AUTHORIZATION_ERROR.description, this.error)];
    }
}
