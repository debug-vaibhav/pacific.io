import { Router } from 'express';
import AuthController from '../controllers/auth';

export default class AuthRouter {
    private static router: Router = Router();

    getRouter(): Router {
        AuthRouter.router.post('/login', AuthController.login);
        AuthRouter.router.post('/signup', AuthController.signup);
        return AuthRouter.router;
    }
}
