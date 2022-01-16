import express, { Express } from 'express';
import helmet from 'helmet';
import { Error } from '@pacific.io/common';

import NoRouter from '../routes/no';
import AuthRouter from '../routes/auth';
import UserRouter from '../routes/user';
import HealthRouter from '../routes/health';
import SourceRouter from '../routes/source';
import JobRouter from '../routes/job';

export default class Route {
    private static authRouter: AuthRouter = new AuthRouter();
    private static userRouter: UserRouter = new UserRouter();
    private static healthRouter: HealthRouter = new HealthRouter();
    private static sourceRouter: SourceRouter = new SourceRouter();
    private static jobRouter: JobRouter = new JobRouter();
    private static noRouter: NoRouter = new NoRouter();

    static loadRoutes(application: Express) {
        application.use(express.json());
        application.use(helmet());
        application.use('/api/v1/auth', Route.authRouter.getRouter());
        application.use('/api/v1/user', Route.userRouter.getRouter());
        application.use('/api/v1/health', Route.healthRouter.getRouter());
        application.use('/api/v1/source', Route.sourceRouter.getRouter());
        application.use('/api/v1/job', Route.jobRouter.getRouter());
        application.all('*', Route.noRouter.getRouter());
        application.use(Error.handleError);
    }
}
