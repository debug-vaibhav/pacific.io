import BaseError from '../base-error';
import CustomError from '../custom-error';
import { Errors } from '../../../constants/errors';

export class MismatchError extends CustomError {
    statusCode = 401;
    entity: string;
    error: any;

    constructor(entity: string, error: any) {
        super(Errors.MISMATCH_ERROR.header);
        Object.setPrototypeOf(this, MismatchError.prototype);
        this.entity = entity;
        this.error = error;
    }

    serializeErrors(): BaseError[] {
        return [new BaseError(`${this.entity} ${Errors.MISMATCH_ERROR.description}`, this.error)];
    }
}
