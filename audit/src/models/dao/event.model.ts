import { Model, Optional, DataTypes } from 'sequelize';
import sequelize from '../../connections/db';

interface EventInterface {
    id?: number;
    name: string;
    level: string;
    payload: string;
    loggedBy: string;
}

interface EventCreationAttributes extends Optional<EventInterface, "id"> {}

class Event extends Model<EventInterface, EventCreationAttributes> implements EventInterface {
    public id!: number;
    public name!: string;
    public level!: string;
    public payload!: string;
    public loggedBy!: string;

    public readonly loggedAt!: Date;
}

Event.init(
  {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    level: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    payload: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    loggedBy: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
  },
    {
      tableName: "events",
      schema: "dbo",
      timestamps: true,
      createdAt: 'loggedAt',
      updatedAt: false,
      sequelize,
  }
);

export default Event;