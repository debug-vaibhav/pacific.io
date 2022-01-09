import { Logger, CONSTANTS } from '@pacific.io/common';
import { UserRabbitMQTransport } from './user-rabbitmq-transport';
import { RabbitMQInstance } from './rabbitmq';

export const LoggerInstance: Logger = Logger.getInstance('User');
LoggerInstance.addTransport(
    new UserRabbitMQTransport(
        {
            format: CONSTANTS.LOGGER_COMBINE(CONSTANTS.LOGGER_LABEL({ label: 'User' }), CONSTANTS.LOGGER_TIMESTAMP(), CONSTANTS.LOGGER_COLORIZE(), CONSTANTS.LOGGER_CUSTOMFORMAT),
        },
        RabbitMQInstance
    )
);
