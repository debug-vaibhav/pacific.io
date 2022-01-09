import { amqpWrapper } from '../connections/amqp-wrapper';
import { UserConsumer } from '../event/user.consumer';

const consume = async () => {
    const userConsumer: UserConsumer = new UserConsumer(amqpWrapper.connection);
    await userConsumer.consume();
}

export default consume;