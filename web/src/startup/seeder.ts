import config from 'config';
import { RabbitMQInstance } from '../resources/rabbitmq';
import { DatabaseInstance } from '../resources/database';
import ActionSeeder from '../seeds/action';
import JobSourceSeeder from '../seeds/job-source';
import JobSeeder from '../seeds/job';
import PermissionSeeder from '../seeds/permission';
import ResourceSeeder from '../seeds/resource';
import SourceTypeSeeder from '../seeds/source-type';
import SourceSeeder from '../seeds/source';
import UserSeeder from '../seeds/user';
import RoleSeeder from '../seeds/role';
import RolePermissionSeeder from '../seeds/role-permission';

export default class Seeder {
    /**
     * All sseds has createdBy and updatedBy value as '0', while seeded user has id=1
     */
    public static async start() {
        await RabbitMQInstance.connect(config.get('rabbitmq'));
        await DatabaseInstance.connect(config.get('databaseName'), 'mysql', config.get('databaseUsername'), config.get('databasePassword'), config.get('databaseHost'), config.get('databasePort'));
<<<<<<< HEAD
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
=======
        await ActionSeeder.seed();
        await ResourceSeeder.seed();
        await JobSourceSeeder.seed();
        await JobSeeder.seed();
        await UserSeeder.seed();
        await RoleSeeder.seed();
        await SourceTypeSeeder.seed();
        await SourceSeeder.seed();
        await PermissionSeeder.seed();
        await RolePermissionSeeder.seed();
>>>>>>> 6ffa7946a5b16d23ac09b6a73cdce49c0bb7e932
    }
}
