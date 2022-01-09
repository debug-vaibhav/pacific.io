import winston from 'winston';
import Transport from 'winston-transport';
import { CONSTANTS } from '../constants/constants';

export class Logger {
    private static instance: Logger;
    private _metadata?: any;
    private _logger: winston.Logger;
    private _service: string;
    private _transports: Transport[];

    private constructor(service: string) {
        this._service = service;
        this._transports = [
            new winston.transports.Console({
                format: CONSTANTS.LOGGER_COMBINE(CONSTANTS.LOGGER_LABEL({ label: this._service }), CONSTANTS.LOGGER_TIMESTAMP(), winston.format.colorize(), CONSTANTS.LOGGER_CUSTOMFORMAT),
            }),
        ];
        this._logger = winston.createLogger({ transports: this._transports });
    }

    public static getInstance(service: string): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger(service);
        }
        return Logger.instance;
    }

    public get metadata(): any {
        return this._metadata;
    }

    public set metadata(value: any) {
        this._metadata = value;
    }

    public get logger(): winston.Logger {
        return this._logger;
    }

    public addTransport(transport: Transport): void {
        this._transports.push(transport);
        this._logger = winston.createLogger({ transports: this._transports });
    }
}
