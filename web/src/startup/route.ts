import express, { Express, Response } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import { Error, Auth, UserRequest } from '@pacific.io/common';

import IndexRouter from '../routes/index';
import NoRouter from '../routes/no';
import AuthRouter from '../routes/auth';
import UserRouter from '../routes/user';
import HealthRouter from '../routes/health';
import SourceRouter from '../routes/source';
import JobRouter from '../routes/job';

import { LoggerInstance } from '../resources/logger';

//TODO:morgan logging twice and new line
export default class Route {
    private static indexRouter: IndexRouter = new IndexRouter();
    private static authRouter: AuthRouter = new AuthRouter();
    private static userRouter: UserRouter = new UserRouter();
    private static healthRouter: HealthRouter = new HealthRouter();
    private static sourceRouter: SourceRouter = new SourceRouter();
    private static jobRouter: JobRouter = new JobRouter();
    private static noRouter: NoRouter = new NoRouter();
    private static morganFormat = ':remote-addr :email :method :url HTTP/:http-version :status :res[content-length] - :response-time ms ":referrer" ":user-agent"';

    static loadRoutes(application: Express) {
        const stream: any = {
            write: (message: any) => {
                LoggerInstance.logger.info(message);
            },
        };
        morgan.token('email', (req: UserRequest, res: Response) => {
            if (req.user) {
                return req.user.email;
            }
            return '';
        });
        application.use(express.json());
        application.use(helmet());
        application.use('/api/v1', morgan(Route.morganFormat, { stream }), Route.indexRouter.getRouter());
        application.use('/api/v1/auth', morgan(Route.morganFormat, { stream }), Route.authRouter.getRouter());
        application.use(Auth.isAuthenticated);
        application.use(morgan(Route.morganFormat, { stream }));
        application.use('/api/v1/user', Route.userRouter.getRouter());
        application.use('/api/v1/health', Route.healthRouter.getRouter());
        application.use('/api/v1/source', Route.sourceRouter.getRouter());
        application.use('/api/v1/job', Route.jobRouter.getRouter());
        application.all('*', morgan(Route.morganFormat, { stream }), Route.noRouter.getRouter());
        application.use(morgan(Route.morganFormat, { stream }), Error.handleError);
    }
}
