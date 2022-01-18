import { UserPayload } from '../models/dto/req-user';

declare global {
    namespace Express {
        interface Request {
            user: UserPayload;
        }
    }
}
