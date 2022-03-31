import { Model, Optional, DataTypes } from 'sequelize';
import { DatabaseInstance } from '../resources/database';
import { PermissionInterface } from '@pacific.io/common';

type PermissionCreationAttributes = Optional<PermissionInterface, 'id'>;

class Permission extends Model<PermissionInterface, PermissionCreationAttributes> implements PermissionInterface {
    public id!: number;
    public resourceId!: number;
    public actionId!: number;
    public createdBy!: number;
    public updatedBy!: number;
    public createdDate!: string;
    public updatedDate!: string;
    public isDeleted!: boolean;

    static initialize() {
        Permission.init(
            {
                id: {
                    field: 'id',
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                },
                resourceId: {
                    field: 'resource_id',
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                actionId: {
                    field: 'action_id',
                    type: DataTypes.INTEGER,
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
                tableName: 'permission',
                timestamps: false,
                sequelize: DatabaseInstance.connection,
            }
        );
    }
}

export default Permission;
