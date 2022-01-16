import config from 'config';
import { RabbitMQInstance } from '../resources/rabbitmq';
import { DatabaseInstance } from '../resources/database';

class Seeder {
    public static async start() {
        await RabbitMQInstance.connect(config.get('rabbitmq'));
        await DatabaseInstance.connect(config.get('databaseName'), 'mssql', config.get('databaseUsername'), config.get('databasePassword'), config.get('databaseHost'), config.get('databasePort'));
        // const { default: UserSeeder } = await import('../seeds/user');
        // await UserSeeder.seed();
    }
}

Seeder.start();
