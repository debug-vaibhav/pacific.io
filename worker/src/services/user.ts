import { CrudService, UserDto, DateTimeUtility } from '@pacific.io/common';
import User from '../models/user';

export default class UserService implements CrudService {
    public async getAll(): Promise<Array<UserDto>> {
        const users: User[] = await User.findAll({ where: { isDeleted: false } });
        return <UserDto[]>users;
    }

    public async get(limit: number, offset: number): Promise<Array<UserDto>> {
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
            user.firstName = data.firstName || user.firstName;
            user.lastName = data.lastName || user.lastName;
            user.roleId = data.roleId || user.roleId;
            user.isActivated = data.isActivated || user.isActivated;
            user.updatedDate = DateTimeUtility.getCurrentDateTime();
            user.updatedBy = data.updatedBy || user.updatedBy || 1;
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

    public async deleteAll(): Promise<Number | null> {
        const rows = await User.destroy({ truncate: true });
        return rows;
    }
}
