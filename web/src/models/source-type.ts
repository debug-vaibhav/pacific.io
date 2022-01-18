import { Model, Optional, DataTypes } from 'sequelize';
import { DatabaseInstance } from '../resources/database';
import { SourceTypeInterface } from '@pacific.io/common';

type SourceTypeCreationAttributes = Optional<SourceTypeInterface, 'id'>;

class SourceType extends Model<SourceTypeInterface, SourceTypeCreationAttributes> implements SourceTypeInterface {
    public id!: number;
    public type!: string;
    public createdBy!: number;
    public updatedBy!: number;
    public createdDate!: string;
    public updatedDate!: string;
    public isDeleted!: boolean;

    static initialize() {
        SourceType.init(
            {
                id: {
                    field: 'id',
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                },
                type: {
                    field: 'type',
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
                tableName: 'source_type',
                schema: 'dbo',
                timestamps: false,
                sequelize: DatabaseInstance.connection,
            }
        );
    }
}

export default SourceType;
