import User from '../models/dto/user';

declare global {
    namespace Express {
        interface Request {
            user: User;
        }
    }
}
