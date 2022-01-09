import { Router } from 'express';
import UserController from '../controllers/user';

export default class UserRouter {
    private static router: Router = Router();

    getRouter(): Router {
        UserRouter.router.get('/', UserController.getUsers);
        UserRouter.router.get('/:id', UserController.getUser);
        UserRouter.router.post('/', UserController.createUser);
        UserRouter.router.delete('/delete/:id', UserController.deleteUser);
        UserRouter.router.put('/', UserController.updateUser);
        return UserRouter.router;
    }
}
