import { Router } from 'express';
import UserController from '../controllers/user';

export default class UserRouter {
    private static router: Router = Router();

    getRouter(): Router {
        UserRouter.router.get('/', UserController.get);
        UserRouter.router.get('/:id', UserController.getById);
        UserRouter.router.post('/', UserController.create);
        UserRouter.router.delete('/', UserController.deleteAll);
        UserRouter.router.delete('/:id', UserController.deleteById);
        UserRouter.router.put('/:id', UserController.updateById);
        return UserRouter.router;
    }
}
