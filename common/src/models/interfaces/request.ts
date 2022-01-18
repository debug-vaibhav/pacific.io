import { Request } from 'express';
import { UserPayload } from '../dto/req-user';

export interface UserRequest extends Request {
    user: UserPayload;
}
