import BaseError from '../base-error';
import CustomError from '../custom-error';
import { Errors } from '../../../constants/errors';

export class ExistsError extends CustomError {
    statusCode = 406;
    entity: string;
    error: any;

    constructor(entity: string, error: any) {
        super(Errors.EXISTS_ERROR.header);
        Object.setPrototypeOf(this, ExistsError.prototype);
        this.entity = entity;
        this.error = error;
    }

    serializeErrors(): BaseError[] {
        return [new BaseError(`${this.entity} ${Errors.EXISTS_ERROR.description}`, this.error)];
    }
}
