import { Request, Response, NextFunction } from 'express';
import CommonError from '../models/error/common-error';
import CustomError from '../models/error/custom-error';
import { InternalServerError } from '../models/error/server/internal-server-error';

export class Error {
    static handleError(error: Error, req: any, res: any, next: NextFunction) {
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json(new CommonError(error.message, error.serializeErrors()));
        }
        const internalServerError = new InternalServerError(error);
        return res.status(internalServerError.statusCode).json(new CommonError(internalServerError.message, internalServerError.serializeErrors()));
    }
}
