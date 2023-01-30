import config from 'config';
import { RabbitMQInstance } from '../resources/rabbitmq';
import { DatabaseInstance } from '../resources/database';

class Seeder {
    public static async start() {
        await RabbitMQInstance.connect(config.get('rabbitmq'));
        await DatabaseInstance.connect(config.get('databaseName'), 'mysql', config.get('databaseUsername'), config.get('databasePassword'), config.get('databaseHost'), config.get('databasePort'));
        const { default: JobSourceSeeder } = await import('../seeds/job-source');
        const { default: JobSeeder } = await import('../seeds/job');
        const { default: SourceTypeSeeder } = await import('../seeds/source-type');
        const { default: SourceSeeder } = await import('../seeds/source');
        const { default: UserSeeder } = await import('../seeds/user');
        await JobSourceSeeder.seed();
        await JobSeeder.seed();
        await SourceTypeSeeder.seed();
        await SourceSeeder.seed();
        await UserSeeder.seed();
    }
}

Seeder.start();
