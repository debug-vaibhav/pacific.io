import { Router } from 'express';
import JobController from '../controllers/job';

export default class JobRouter {
    private static router: Router = Router();

    getRouter(): Router {
        JobRouter.router.get('/', JobController.get);
        JobRouter.router.get('/:id', JobController.getById);
        JobRouter.router.post('/', JobController.create);
        JobRouter.router.put('/:id', JobController.updateById);
        JobRouter.router.delete('/:id', JobController.deleteById);
        return JobRouter.router;
    }
}
