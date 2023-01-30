import { Logger } from 'winston';
import { LoggerInstance } from '../resources/logger';
import { RabbitMQInstance } from '../resources/rabbitmq';
import UserCreatedConsumer from '../events/consumers/user-created-consumer';
import UserUpdatedConsumer from '../events/consumers/user-updated-consumer';
import UserDeletedConsumer from '../events/consumers/user-deleted-consumer';
import SourceCreatedConsumer from '../events/consumers/source-created-consumer';
import SourceUpdatedConsumer from '../events/consumers/source-updated-consumer';
import SourceDeletedConsumer from '../events/consumers/source-deleted-consumer';
import JobCreatedConsumer from '../events/consumers/job-created-consumer';
import JobUpdatedConsumer from '../events/consumers/job-updated-consumer';
import JobDeletedConsumer from '../events/consumers/job-deleted-consumer';
import JobKilledConsumer from '../events/consumers/job-killed-consumer';
import JobResumedConsumer from '../events/consumers/job-resumed-consumer';
import JobRunningConsumer from '../events/consumers/job-running-consumer';
import JobScheduledConsumer from '../events/consumers/job-scheduled-consumer';
import JobSkippedConsumer from '../events/consumers/job-skipped-consumer';
import JobStoppedConsumer from '../events/consumers/job-stopped-consumer';

export default class Consumers {
    private static LOGGER: Logger = LoggerInstance.logger;

    private static userCreatedConsumer = new UserCreatedConsumer(RabbitMQInstance);
    private static userUpdatedConsumer = new UserUpdatedConsumer(RabbitMQInstance);
    private static userDeletedConsumer = new UserDeletedConsumer(RabbitMQInstance);
    private static sourceCreatedConsumer = new SourceCreatedConsumer(RabbitMQInstance);
    private static sourceUpdatedConsumer = new SourceUpdatedConsumer(RabbitMQInstance);
    private static sourceDeletedConsumer = new SourceDeletedConsumer(RabbitMQInstance);
    private static jobCreatedConsumer = new JobCreatedConsumer(RabbitMQInstance);
    private static jobUpdatedConsumer = new JobUpdatedConsumer(RabbitMQInstance);
    private static jobDeletedConsumer = new JobDeletedConsumer(RabbitMQInstance);
    private static jobKilledConsumer = new JobKilledConsumer(RabbitMQInstance);
    private static jobResumedConsumer = new JobResumedConsumer(RabbitMQInstance);
    private static jobRunningConsumer = new JobRunningConsumer(RabbitMQInstance);
    private static jobScheduledConsumer = new JobScheduledConsumer(RabbitMQInstance);
    private static jobSkippedConsumer = new JobSkippedConsumer(RabbitMQInstance);
    private static jobStoppedConsumer = new JobStoppedConsumer(RabbitMQInstance);

    static start() {
        Consumers.userCreatedConsumer.consume();
        Consumers.userUpdatedConsumer.consume();
        Consumers.userDeletedConsumer.consume();
        Consumers.sourceCreatedConsumer.consume();
        Consumers.sourceUpdatedConsumer.consume();
        Consumers.sourceDeletedConsumer.consume();
        Consumers.jobCreatedConsumer.consume();
        Consumers.jobUpdatedConsumer.consume();
        Consumers.jobDeletedConsumer.consume();
        Consumers.jobKilledConsumer.consume();
        Consumers.jobResumedConsumer.consume();
        Consumers.jobRunningConsumer.consume();
        Consumers.jobScheduledConsumer.consume();
        Consumers.jobSkippedConsumer.consume();
        Consumers.jobStoppedConsumer.consume();
    }
}
