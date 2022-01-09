import BaseError from '../base-error';
import CustomError from '../custom-error';
import { Errors } from '../../../constants/errors';

export class CreateError extends CustomError {
    statusCode = 500;
    entity: string;
    error: any;

    constructor(entity: string, error: any) {
        super(Errors.CREATE_ERROR.header);
        Object.setPrototypeOf(this, CreateError.prototype);
        this.entity = entity;
        this.error = error;
    }

    serializeErrors(): BaseError[] {
        return [new BaseError(`${Errors.CREATE_ERROR.description} ${this.entity}`, this.error)];
    }
}
