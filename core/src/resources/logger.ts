import { Logger, CONSTANTS } from '@pacific.io/common';
import { CoreRabbitMQTransport } from './core-rabbitmq-transport';
import { RabbitMQInstance } from './rabbitmq';

export const LoggerInstance: Logger = Logger.getInstance('Core');
LoggerInstance.addTransport(
    new CoreRabbitMQTransport(
        {
            format: CONSTANTS.LOGGER_COMBINE(CONSTANTS.LOGGER_LABEL({ label: 'Core' }), CONSTANTS.LOGGER_TIMESTAMP(), CONSTANTS.LOGGER_COLORIZE(), CONSTANTS.LOGGER_CUSTOMFORMAT),
        },
        RabbitMQInstance
    )
);
