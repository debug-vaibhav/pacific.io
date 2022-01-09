import { Model, Optional, DataTypes } from 'sequelize';
import { DateTimeUtility } from '@pacific.io/common';
import { DatabaseInstance } from '../../resources/database';
import SourceInterface from '../interfaces/source';

type SourceCreationAttributes = Optional<SourceInterface, 'id'>;

class Source extends Model<SourceInterface, SourceCreationAttributes> implements SourceInterface {
    id!: number;
    name!: string;
    typeId!: number;
    description!: string;
    host!: string;
    port!: number;
    database!: string;
    username!: string;
    password!: string;
    instance!: string;
    createdBy!: number;
    updatedBy!: number;
    createdDate!: string;
    updatedDate!: string;
    isDeleted!: boolean;

    static initialize() {
        Source.init(
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
                typeId: {
                    field: 'typeid',
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                description: {
                    field: 'description',
                    type: DataTypes.STRING(500),
                    allowNull: true,
                },
                host: {
                    field: 'host',
                    type: DataTypes.TEXT,
                    allowNull: false,
                },
                port: {
                    field: 'port',
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                instance: {
                    field: 'instance',
                    type: DataTypes.TEXT,
                    allowNull: false,
                },
                database: {
                    field: 'database',
                    type: DataTypes.TEXT,
                    allowNull: false,
                },
                username: {
                    field: 'username',
                    type: DataTypes.TEXT,
                    allowNull: false,
                },
                password: {
                    field: 'password',
                    type: DataTypes.TEXT,
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
                    defaultValue: DateTimeUtility.getCurrentDateTime(),
                },
                updatedDate: {
                    field: 'updated_date',
                    type: DataTypes.STRING,
                    allowNull: false,
                    defaultValue: DateTimeUtility.getCurrentDateTime(),
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
                tableName: 'source',
                schema: 'dbo',
                timestamps: false,
                sequelize: DatabaseInstance.connection,
            }
        );
    }
}

export default Source;
