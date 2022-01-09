import BaseError from './base-error';

export default class CommonError {
    public message: string;
    public errors: BaseError[];

    constructor(message: string, errors: BaseError[]) {
        this.message = message;
        this.errors = errors;
    }
}
