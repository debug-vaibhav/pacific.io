import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from 'config';

export class AuthUtility {
    static async hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, 12);
    }

    static async comparePassword(password: string, hashedPassword: string): Promise<boolean> {
        return bcrypt.compare(password, hashedPassword);
    }

    static getPayload(token: string): any {
        try {
            const payload: any = jwt.verify(token, config.get('jwtSecretKey'));
            return payload;
        } catch (error) {
            return null;
        }
    }
}
