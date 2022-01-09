import { Dialect, Sequelize } from 'sequelize';
import { DatabaseError } from '../models/error/connection/database-error';
/**
 * The Singleton class defines the `getInstance` method that lets clients access
 * the unique singleton instance.
 */
export class Database {
    private static instance: Database;
    private _connection?: Sequelize;

    private constructor() {
        /**
         * The Singleton's constructor should always be private to prevent direct
         * construction calls with the `new` operator.
         */
    }

    /**
     * The static method that controls the access to the singleton instance.
     *
     * This implementation let you subclass the Singleton class while keeping
     * just one instance of each subclass around.
     */
    public static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }

    public get connection() {
        if (!this._connection) {
            throw new DatabaseError('Database Connection Failed');
        }
        return this._connection;
    }

    /**
     * Finally, any singleton should define some business logic, which can be
     * executed on its instance.
     */
    public async connect(database: string, dialect: Dialect, username: string, password: string, host: string, port: number, instance?: string) {
        const sequelize: Sequelize = new Sequelize(database, username, password, {
            dialect: dialect,
            host: host,
            port: port,
            dialectOptions: {
                options: {
                    instanceName: instance,
                    encrypt: false,
                    trustServerCertificate: false,
                    validateBulkLoadParameters: true,
                },
            },
            define: {
                timestamps: true,
            },
            pool: {
                max: 5,
                min: 1,
                acquire: 30000,
                idle: 10000,
            },
            logging: false,
        });
        await sequelize.authenticate();
        this._connection = sequelize;
    }
}
