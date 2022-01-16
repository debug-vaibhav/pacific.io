import config from 'config';
import winston, { format } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import { Logger } from '@pacific.io/common';

export const LoggerInstance: Logger = Logger.getInstance(config.get('service'));
if (config.get('log.enable')) {
    LoggerInstance.addTransport(
        new DailyRotateFile({
            filename: `${config.get('log.path')}/%DATE%/${config.get('service')}-debug.log`,
            zippedArchive: true,
            maxSize: config.get('log.maxFileSize'),
            maxFiles: config.get('log.archieve'),
            level: 'debug',
            format: format.combine(
                format.label({ label: config.get('service') }),
                format.timestamp(),
                winston.format.simple(),
                format.printf(({ level, message, label, timestamp }) => {
                    return `${timestamp} ${label} [${level}]: ${message}`;
                })
            ),
        })
    );
    LoggerInstance.addTransport(
        new DailyRotateFile({
            filename: `${config.get('log.path')}/%DATE%/${config.get('service')}-audit.log`,
            zippedArchive: true,
            maxSize: config.get('log.maxFileSize'),
            maxFiles: config.get('log.archieve'),
            level: 'info',
            format: format.combine(
                format.label({ label: config.get('service') }),
                format.timestamp(),
                winston.format.simple(),
                format.printf(({ level, message, label, timestamp }) => {
                    return `${timestamp} ${label} [${level}]: ${message}`;
                })
            ),
        })
    );
    LoggerInstance.addTransport(
        new DailyRotateFile({
            filename: `${config.get('log.path')}/%DATE%/${config.get('service')}-error.log`,
            zippedArchive: true,
            maxSize: config.get('log.maxFileSize'),
            maxFiles: config.get('log.archieve'),
            level: 'error',
            format: format.combine(
                format.label({ label: config.get('service') }),
                format.timestamp(),
                winston.format.simple(),
                format.printf(({ level, message, label, timestamp }) => {
                    return `${timestamp} ${label} [${level}]: ${message}`;
                })
            ),
        })
    );
}
