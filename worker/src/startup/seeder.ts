import config from 'config';
import { RabbitMQInstance } from '../resources/rabbitmq';
import { DatabaseInstance } from '../resources/database';
import JobSourceSeeder from '../seeds/job-source';
import JobSeeder from '../seeds/job';
import SourceTypeSeeder from '../seeds/source-type';
import SourceSeeder from '../seeds/source';

export default class Seeder {
    /**
     * All sseds has createdBy and updatedBy value as '0', while seeded user has id=1
     */
    public static async start() {
        await RabbitMQInstance.connect(config.get('rabbitmq'));
        await DatabaseInstance.connect(config.get('databaseName'), 'mysql', config.get('databaseUsername'), config.get('databasePassword'), config.get('databaseHost'), config.get('databasePort'));
        await JobSourceSeeder.seed();
        await JobSeeder.seed();
        await SourceTypeSeeder.seed();
        await SourceSeeder.seed();
    }
}
