import { Model, Optional, DataTypes } from 'sequelize';
import { JobInterface } from '@pacific.io/common';
import { DatabaseInstance } from '../resources/database';

type JobCreationAttributes = Optional<JobInterface, 'id'>;

class Job extends Model<JobInterface, JobCreationAttributes> implements JobInterface {
    public id!: number;
    public name!: string;
    public description!: string;
    public timezone!: string;
    public cronExpression!: string;
    public design!: string;
    public createdBy!: number;
    public updatedBy!: number;
    public createdDate!: string;
    public updatedDate!: string;
    public isDeleted!: boolean;

    static initialize() {
        Job.init(
            {
                id: {
                    field: 'id',
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                },
                name: {
                    field: 'name',
                    type: DataTypes.STRING(200),
                    allowNull: false,
                },
                description: {
                    field: 'description',
                    type: DataTypes.STRING(500),
                    allowNull: true,
                },
                timezone: {
                    field: 'timezone',
                    type: DataTypes.STRING(50),
                    allowNull: true,
                },
                cronExpression: {
                    field: 'cron_expression',
                    type: DataTypes.STRING(50),
                    allowNull: true,
                },
                design: {
                    field: 'design',
                    type: DataTypes.TEXT,
                    allowNull: true,
                },
                isDeleted: {
                    field: 'is_deleted',
                    type: DataTypes.BOOLEAN,
                    allowNull: false,
                },
                createdDate: {
                    field: 'created_date',
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                updatedDate: {
                    field: 'updated_date',
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                createdBy: {
                    field: 'created_by',
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                updatedBy: {
                    field: 'updated_by',
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
            },
            {
                tableName: 'job',
                schema: 'dbo',
                timestamps: false,
                sequelize: DatabaseInstance.connection,
            }
        );
    }
}

export default Job;
