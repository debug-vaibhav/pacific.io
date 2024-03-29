import { Router } from 'express';
import SourceController from '../controllers/source';

export default class SourceRouter {
    private static router: Router = Router();

    getRouter(): Router {
        SourceRouter.router.get('/', SourceController.get);
        SourceRouter.router.get('/:id', SourceController.getById);
        SourceRouter.router.post('/', SourceController.create);
        SourceRouter.router.put('/:id', SourceController.updateById);
        SourceRouter.router.delete('/', SourceController.deleteAll);
        SourceRouter.router.delete('/:id', SourceController.deleteById);
        return SourceRouter.router;
    }
}
