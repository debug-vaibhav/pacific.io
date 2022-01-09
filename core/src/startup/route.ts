import express, { Express } from 'express';
import helmet from 'helmet';
import { Error } from '@pacific.io/common';

import SourceRouter from '../routes/source';
import JobRouter from '../routes/job';
import NoRouter from '../routes/no';

export default class Route {
    private static sourceRouter: SourceRouter = new SourceRouter();
    private static jobRouter: JobRouter = new JobRouter();
    private static noRouter: NoRouter = new NoRouter();

    static loadRoutes(application: Express) {
        application.use(express.json());
        application.use(helmet());
        application.use('/api/v1/source', Route.sourceRouter.getRouter());
        application.use('/api/v1/job', Route.jobRouter.getRouter());
        application.all('*', Route.noRouter.getRouter());
        application.use(Error.handleError);
    }
}
