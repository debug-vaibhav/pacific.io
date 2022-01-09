import BaseError from '../base-error';
import CustomError from '../custom-error';
import { Errors } from '../../../constants/errors';

export class DeleteError extends CustomError {
    statusCode = 500;
    entity: string;
    error: any;

    constructor(entity: string, error: any) {
        super(Errors.DELETE_ERROR.header);
        Object.setPrototypeOf(this, DeleteError.prototype);
        this.entity = entity;
        this.error = error;
    }

    serializeErrors(): BaseError[] {
        return [new BaseError(`${Errors.DELETE_ERROR.description} ${this.entity}`, this.error)];
    }
}
