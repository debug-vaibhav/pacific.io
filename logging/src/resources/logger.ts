import { Logger, CONSTANTS } from '@pacific.io/common';
import { LoggingRabbitMQTransport } from './logging-rabbitmq-transport';
import { RabbitMQInstance } from './rabbitmq';

export const LoggerInstance: Logger = Logger.getInstance('Logging');
LoggerInstance.addTransport(
    new LoggingRabbitMQTransport(
        {
            format: CONSTANTS.LOGGER_COMBINE(CONSTANTS.LOGGER_LABEL({ label: 'Logging' }), CONSTANTS.LOGGER_TIMESTAMP(), CONSTANTS.LOGGER_COLORIZE(), CONSTANTS.LOGGER_CUSTOMFORMAT),
        },
        RabbitMQInstance
    )
);
