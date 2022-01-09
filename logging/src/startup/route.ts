import express, { Express } from 'express';
import helmet from 'helmet';
import { Error } from '@pacific.io/common';

import IndexRouter from '../routes/index';

export default class Route {
    private static indexRouter: IndexRouter = new IndexRouter();

    static loadRoutes(application: Express) {
        application.use(express.json());
        application.use(helmet());
        application.use('/api/v1/log', Route.indexRouter.getRouter());
        application.use(Error.handleError);
    }
}
