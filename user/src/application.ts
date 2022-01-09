import express, { Express } from 'express';
import config from 'config';
import { Cors } from '@pacific.io/common';
import Log from './startup/log';
import Route from './startup/route';
import Migration from './startup/migration';
import Boot from './startup/boot';
import { RabbitMQInstance } from './resources/rabbitmq';
import { DatabaseInstance } from './resources/database';

class Application {
    static application: Express = express();

    static async run() {
        await RabbitMQInstance.connect(config.get('rabbitmq'));
        await DatabaseInstance.connect(config.get('databaseName'), 'mssql', config.get('databaseUsername'), config.get('databasePassword'), config.get('databaseHost'), config.get('databasePort'));
        await Migration.syncMigrations();
        Log.useMorgan(Application.application);
        Cors.applyCors(Application.application);
        Route.loadRoutes(Application.application);
        Boot.boot(Application.application);
    }
}

Application.run();
