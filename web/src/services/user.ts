import { CrudService, UserDto } from '@pacific.io/common';
import User from '../models/user';

export default class UserService implements CrudService {
    public async get(limit: number | undefined, offset: number | undefined): Promise<Array<UserDto>> {
        const users: User[] = await User.findAll({ offset, limit, where: { isDeleted: false } });
        return <UserDto[]>users;
    }

    public async getById(id: number | string): Promise<UserDto | null> {
        const user: User | null = await User.findOne({ where: { id: id, isDeleted: false } });
        return <UserDto>user;
    }

    public async getByEmail(email: string): Promise<UserDto | null> {
        const user: User | null = await User.findOne({ where: { email: email, isDeleted: false } });
        return <UserDto>user;
    }

    public async create(userDto: UserDto): Promise<UserDto | null> {
        const user: User = await User.create(userDto);
        return <UserDto>user;
    }

    public async updateById(id: number | string, data: UserDto): Promise<UserDto | null> {
        const user: User | null = await User.findOne({ where: { id: id, isDeleted: false } });
        if (user) {
            user.firstName = data.firstName;
            user.lastName = data.lastName;
            user.roleId = data.roleId;
            user.isActivated = data.isActivated;
            user.updatedDate = data.updatedDate;
            user.updatedBy = data.updatedBy || 1;
            const updatedUser: User = await user.save();
            return <UserDto>updatedUser;
        }
        return user;
    }

    public async deleteById(id: number | string): Promise<UserDto | null> {
        const user: User | null = await User.findOne({ where: { id: id, isDeleted: false } });
        await user?.destroy();
        return <UserDto>user;
    }
}
