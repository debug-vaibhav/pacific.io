import BaseError from '../base-error';
import CustomError from '../custom-error';
import { Errors } from '../../../constants/errors';

export class ReadError extends CustomError {
    statusCode = 500;
    entity: string;
    error: any;

    constructor(entity: string, error: any) {
        super(Errors.READ_ERROR.header);
        Object.setPrototypeOf(this, ReadError.prototype);
        this.entity = entity;
        this.error = error;
    }

    serializeErrors(): BaseError[] {
        return [new BaseError(`${Errors.READ_ERROR.description} ${this.entity}`, this.error)];
    }
}
