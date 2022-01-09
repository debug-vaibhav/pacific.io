import winston, { format } from 'winston';

export class CONSTANTS {
    static LOGGER_COMBINE = format.combine;
    static LOGGER_TIMESTAMP = format.timestamp;
    static LOGGER_LABEL = format.label;
    static LOGGER_PRINTF = format.printf;
    static LOGGER_COLORIZE = winston.format.colorize;
    static LOGGER_CUSTOMFORMAT: winston.Logform.Format = CONSTANTS.LOGGER_PRINTF(({ level, message, label, timestamp }) => {
        return `${timestamp} ${label} [${level}]: ${message}`;
    });
}
