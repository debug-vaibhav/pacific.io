import BaseError from '../base-error';
import CustomError from '../custom-error';
import { Errors } from '../../../constants/errors';

export class NotExistsError extends CustomError {
    statusCode = 406;
    entity: string;
    error: any;

    constructor(entity: string, error: any) {
        super(Errors.NOT_EXISTS_ERROR.header);
        Object.setPrototypeOf(this, NotExistsError.prototype);
        this.entity = entity;
        this.error = error;
    }

    serializeErrors(): BaseError[] {
        return [new BaseError(`${this.entity} ${Errors.NOT_EXISTS_ERROR.description}`, this.error)];
    }
}
