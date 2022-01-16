import { Model, Optional, DataTypes } from 'sequelize';
import UserInterface from '../interfaces/user';
import { DatabaseInstance } from '../../resources/database';

type UserCreationAttributes = Optional<UserInterface, 'id'>;

class User extends Model<UserInterface, UserCreationAttributes> implements UserInterface {
    public id!: number;
    public firstName!: string;
    public lastName!: string;
    public email!: string;
    public password!: string;
    public roleId!: number;
    public isDeleted!: boolean;
    public isActivated!: boolean;
    public createdDate!: string;
    public updatedDate!: string;
    public createdBy!: number;
    public updatedBy!: number;

    static initialize() {
        User.init(
            {
                id: {
                    field: 'id',
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                },
                firstName: {
                    field: 'first_name',
                    type: DataTypes.STRING(20),
                    allowNull: false,
                },
                lastName: {
                    field: 'last_name',
                    type: DataTypes.STRING(20),
                    allowNull: false,
                },
                email: {
                    field: 'email',
                    type: DataTypes.STRING(100),
                    allowNull: false,
                    unique: true,
                },
                password: {
                    field: 'password',
                    type: DataTypes.TEXT,
                    allowNull: false,
                },
                roleId: {
                    field: 'role_id',
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                isDeleted: {
                    field: 'is_deleted',
                    type: DataTypes.BOOLEAN,
                    allowNull: false,
                    defaultValue: false,
                },
                isActivated: {
                    field: 'is_activated',
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
                    allowNull: true,
                },
                updatedBy: {
                    field: 'updated_by',
                    type: DataTypes.INTEGER,
                    allowNull: true,
                },
            },
            {
                tableName: 'user',
                schema: 'dbo',
                timestamps: false,
                sequelize: DatabaseInstance.connection,
            }
        );
    }
}

export default User;
