import BaseError from './base-error';

export default abstract class CustomError extends Error {
    abstract statusCode: number;
    abstract error: any;

    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, CustomError.prototype);
    }

    abstract serializeErrors(): BaseError[];
}
