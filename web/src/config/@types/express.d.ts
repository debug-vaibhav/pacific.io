import { UserPayload } from '@pacific.io/common';

declare global {
    namespace Express {
        interface Request {
            user: UserPayload;
        }
    }
}
