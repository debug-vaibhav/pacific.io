import { Router } from 'express';
import SourceController from '../controllers/source';

export default class SourceRouter {
    private static router: Router = Router();

    getRouter(): Router {
        SourceRouter.router.get('/', SourceController.getAll);
        SourceRouter.router.get('/:id', SourceController.getById);
        SourceRouter.router.post('/', SourceController.create);
        SourceRouter.router.put('/:id', SourceController.updateById);
        SourceRouter.router.delete('/:id', SourceController.deleteById);
        return SourceRouter.router;
    }
}
