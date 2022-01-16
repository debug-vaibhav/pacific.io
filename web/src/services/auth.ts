import User from '../models/dao/user';

export default class AuthService {
    public async login(limit: number, offset: number): Promise<Array<User>> {
        const users: User[] = await User.findAll({ offset, limit, where: { isDeleted: false } });
        return users;
    }

    public async signup(id: number | string): Promise<User | null> {
        const user: User | null = await User.findOne({ where: { id: id, isDeleted: false } });
        return user;
    }
}
