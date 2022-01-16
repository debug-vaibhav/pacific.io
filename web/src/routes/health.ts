import { Router } from 'express';
import HealthController from '../controllers/health';

export default class HealthRouter {
    private static router: Router = Router();

    getRouter(): Router {
        HealthRouter.router.get('/heapdump', HealthController.getHeapdump);
        return HealthRouter.router;
    }
}
