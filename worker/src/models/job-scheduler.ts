import { Model, Optional, DataTypes } from 'sequelize';
import { JobSchedulerInterface } from '@pacific.io/common';
import { DatabaseInstance } from '../resources/database';

type JobSchedulerCreationAttributes = Optional<JobSchedulerInterface, 'id'>;

class JobScheduler extends Model<JobSchedulerInterface, JobSchedulerCreationAttributes> implements JobSchedulerInterface {
    public id!: number;
    public jobId!: number;
    public status!: string;
    public nextExecutionTime!: string;
    public createdBy!: number;
    public updatedBy!: number;
    public createdDate!: string;
    public updatedDate!: string;
    public isDeleted!: boolean;

    static initialize() {
        JobScheduler.init(
            {
                id: {
                    field: 'id',
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                },
                jobId: {
                    field: 'job_id',
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                status: {
                    field: 'status',
                    type: DataTypes.STRING(20),
                    allowNull: false,
                },
                nextExecutionTime: {
                    field: 'next_execution_time',
                    type: DataTypes.DATE,
                    allowNull: false,
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
                tableName: 'job_scheduler',
                timestamps: false,
                sequelize: DatabaseInstance.connection,
            }
        );
    }
}

export default JobScheduler;
