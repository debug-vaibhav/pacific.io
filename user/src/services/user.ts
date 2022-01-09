import UserDto from '../models/dto/user';
import User from '../models/dao/user';
import { CrudService } from '@pacific.io/common';

export default class UserService implements CrudService {
    public async get(limit: number, offset: number): Promise<Array<User>> {
        const users: User[] = await User.findAll({ offset, limit, where: { isDeleted: false } });
        return users;
    }

    public async getById(id: number | string): Promise<User | null> {
        const user: User | null = await User.findOne({ where: { id: id, isDeleted: false } });
        return user;
    }

    public async getByEmail(email: string): Promise<User | null> {
        const user: User | null = await User.findOne({ where: { email: email } });
        return user;
    }

    public async create(userDto: UserDto): Promise<User | null> {
        const user: User = await User.create(userDto);
        return user;
    }

    public async updateById(id: number | string): Promise<User | null> {
        const user: User | null = await User.findOne({ where: { id: id, isDeleted: false } });
        return user;
    }

    public async deleteById(id: number | string): Promise<User | null> {
        const user: User | null = await User.findOne({ where: { id: id, isDeleted: false } });
        return user;
    }
}
