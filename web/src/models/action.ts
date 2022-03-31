import { Model, Optional, DataTypes } from 'sequelize';
import { DatabaseInstance } from '../resources/database';
import { ResourceInterface as ActionInterface } from '@pacific.io/common';

type ActionCreationAttributes = Optional<ActionInterface, 'id'>;

class Action extends Model<ActionInterface, ActionCreationAttributes> implements ActionInterface {
    public id!: number;
    public name!: string;
    public createdBy!: number;
    public updatedBy!: number;
    public createdDate!: string;
    public updatedDate!: string;
    public isDeleted!: boolean;

    static initialize() {
        Action.init(
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
                tableName: 'action',
                timestamps: false,
                sequelize: DatabaseInstance.connection,
            }
        );
    }
}

export default Action;
