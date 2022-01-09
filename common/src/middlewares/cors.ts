import cors from 'cors';

export class Cors {
    static applyCors(application: any) {
        application.use(cors());
    }
}
