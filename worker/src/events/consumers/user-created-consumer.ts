import { Consumer, UserCreatedEvent, Queues, UserDto } from '@pacific.io/common';
import UserService from '../../services/user';

export default class UserCreatedConsumer extends Consumer<UserCreatedEvent> {
    queue = Queues.UserCreated;

    private static userService: UserService = new UserService();

    async onMessage(data: UserCreatedEvent): Promise<void> {
        const { firstName, lastName, email, password, roleId, isDeleted, isActivated, createdDate, updatedDate, createdBy, updatedBy } = data.data;
        const user: UserDto = new UserDto(firstName, lastName, email, password, roleId, isDeleted, isActivated, createdDate, updatedDate, createdBy, updatedBy);
        await UserCreatedConsumer.userService.create(user);
    }
}
