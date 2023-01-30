import { Consumer, UserUpdatedEvent, Queues, UserDto } from '@pacific.io/common';
import UserService from '../../services/user';

export default class UserUpdatedConsumer extends Consumer<UserUpdatedEvent> {
    queue = Queues.UserUpdated;

    private static userService: UserService = new UserService();

    async onMessage(data: UserUpdatedEvent): Promise<void> {
        const { id, firstName, lastName, email, password, roleId, isDeleted, isActivated, createdDate, updatedDate, createdBy, updatedBy } = data.data;
        const user: UserDto = new UserDto(firstName, lastName, email, password, roleId, isDeleted, isActivated, createdDate, updatedDate, createdBy, updatedBy);
        await UserUpdatedConsumer.userService.updateById(id, user);
    }
}
