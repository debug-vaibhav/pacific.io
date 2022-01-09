import { Router } from 'express';
import NoController from '../controllers/no';

export default class NoRouter {
    private static router: Router = Router();

    getRouter(): Router {
        NoRouter.router.all('*', NoController.noRoute);
        return NoRouter.router;
    }
}
