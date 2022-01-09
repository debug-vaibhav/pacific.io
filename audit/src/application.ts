import boot from './startup/boot';
import syncMigrations from './startup/migrations';
import consume from './startup/consume';

const startApplication = async () => {
    await boot();
    await syncMigrations();
    await consume();
};

startApplication();
