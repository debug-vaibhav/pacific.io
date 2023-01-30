import { Consumer, UserDeletedEvent, Queues, UserDto } from '@pacific.io/common';
import UserService from '../../services/user';

export default class UserDeletedConsumer extends Consumer<UserDeletedEvent> {
    queue = Queues.UserDeleted;

    private static userService: UserService = new UserService();

    async onMessage(data: UserDeletedEvent): Promise<void> {
        await UserDeletedConsumer.userService.deleteById(data.data.id);
    }
}
