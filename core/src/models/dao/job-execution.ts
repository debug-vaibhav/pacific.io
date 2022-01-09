import { Model, Optional, DataTypes } from 'sequelize';
import { DatabaseInstance } from '../../resources/database';
import JobExecutionInterface from '../interfaces/job-execution';

type JobExecutionCreationAttributes = Optional<JobExecutionInterface, 'id'>;

class JobExecution extends Model<JobExecutionInterface, JobExecutionCreationAttributes> implements JobExecutionInterface {
    public id!: number;
    public jobId!: number;
    public status!: string;
    public startDatetime!: string;
    public endDatetime!: string;
    public createdBy!: number;
    public updatedBy!: number;
    public createdDate!: string;
    public updatedDate!: string;
    public isDeleted!: boolean;

    static initialize() {
        JobExecution.init(
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
                startDatetime: {
                    field: 'start_datetime',
                    type: DataTypes.DATE,
                    allowNull: false,
                },
                endDatetime: {
                    field: 'end_datetime',
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
                tableName: 'job_execution',
                schema: 'dbo',
                timestamps: false,
                sequelize: DatabaseInstance.connection,
            }
        );
    }
}

export default JobExecution;
