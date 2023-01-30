import { Model, Optional, DataTypes } from 'sequelize';
import { DatabaseInstance } from '../resources/database';
import { ResourceInterface } from '@pacific.io/common';

type ResourceCreationAttributes = Optional<ResourceInterface, 'id'>;

class Resource extends Model<ResourceInterface, ResourceCreationAttributes> implements ResourceInterface {
    public id!: number;
    public name!: string;
    public createdBy!: number;
    public updatedBy!: number;
    public createdDate!: string;
    public updatedDate!: string;
    public isDeleted!: boolean;

    static initialize() {
        Resource.init(
            {
                id: {
                    field: 'id',
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                },
                name: {
                    field: 'name',
                    type: DataTypes.STRING(100),
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
                tableName: 'resource',
                timestamps: false,
                sequelize: DatabaseInstance.connection,
            }
        );
    }
}

export default Resource;
