import { Model, Optional, DataTypes } from 'sequelize';
import { DatabaseInstance } from '../resources/database';
import { RoleInterface } from '@pacific.io/common';

type RoleCreationAttributes = Optional<RoleInterface, 'id'>;

class Role extends Model<RoleInterface, RoleCreationAttributes> implements RoleInterface {
    public id!: number;
    public name!: string;
    public createdBy!: number;
    public updatedBy!: number;
    public createdDate!: string;
    public updatedDate!: string;
    public isDeleted!: boolean;

    static initialize() {
        Role.init(
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
                tableName: 'role',
                timestamps: false,
                sequelize: DatabaseInstance.connection,
            }
        );
    }
}

export default Role;
