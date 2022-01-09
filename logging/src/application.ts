import express, { Express } from 'express';
import config from 'config';
import { Cors } from '@pacific.io/common';
import Route from './startup/route';
import Boot from './startup/boot';
import { RabbitMQInstance } from './resources/rabbitmq';

class Application {
    static application: Express = express();

    static async run() {
        await RabbitMQInstance.connect(config.get('rabbitmq'));
        Cors.applyCors(Application.application);
        Route.loadRoutes(Application.application);
        Boot.boot(Application.application);
    }
}

Application.run();
