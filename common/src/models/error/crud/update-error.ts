import BaseError from '../base-error';
import CustomError from '../custom-error';
import { Errors } from '../../../constants/errors';

export class UpdateError extends CustomError {
    statusCode = 500;
    entity: string;
    error: any;

    constructor(entity: string, error: any) {
        super(Errors.UPDATE_ERROR.header);
        Object.setPrototypeOf(this, UpdateError.prototype);
        this.entity = entity;
        this.error = error;
    }

    serializeErrors(): BaseError[] {
        return [new BaseError(`${Errors.UPDATE_ERROR.description} ${this.entity}`, this.error)];
    }
}
