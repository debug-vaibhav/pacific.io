import { Model, Optional, DataTypes } from 'sequelize';
import { DatabaseInstance } from '../resources/database';
import { RolePermissionInterface } from '@pacific.io/common';

type RolePermissionCreationAttributes = Optional<RolePermissionInterface, 'id'>;

class RolePermission extends Model<RolePermissionInterface, RolePermissionCreationAttributes> implements RolePermissionInterface {
    public id!: number;
    public roleId!: number;
    public permissionId!: number;
    public name!: string;
    public createdBy!: number;
    public updatedBy!: number;
    public createdDate!: string;
    public updatedDate!: string;
    public isDeleted!: boolean;

    static initialize() {
        RolePermission.init(
            {
                id: {
                    field: 'id',
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                },
                roleId: {
                    field: 'role_id',
                    type: DataTypes.STRING(100),
                    allowNull: false,
                },
                permissionId: {
                    field: 'permission_id',
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
                tableName: 'role_permission',
                timestamps: false,
                sequelize: DatabaseInstance.connection,
            }
        );
    }
}

export default RolePermission;
