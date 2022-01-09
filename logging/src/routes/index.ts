import { Router } from 'express';
import IndexController from '../controllers/index';

export default class IndexRouter {
    private static router: Router = Router();

    getRouter(): Router {
        IndexRouter.router.get('/', IndexController.index);
        return IndexRouter.router;
    }
}
