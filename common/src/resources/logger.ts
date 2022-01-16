import winston, { format } from 'winston';
import Transport from 'winston-transport';

export class Logger {
    private static instance: Logger;
    private _metadata?: any;
    private _logger: winston.Logger;
    private _service: string;
    private _transports: Transport[] = [];

    private constructor(service: string) {
        this._service = service;
        this._transports.push(
            new winston.transports.Console({
                format: format.combine(
                    format.label({ label: this._service }),
                    format.timestamp(),
                    winston.format.colorize(),
                    format.printf(({ level, message, label, timestamp }) => {
                        return `${timestamp} ${label} [${level}]: ${message}`;
                    })
                ),
            })
        );
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
