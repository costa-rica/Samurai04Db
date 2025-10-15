import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from './_connection';

interface MessageAttributes {
  id: number;
  conversationId: number;
  content: string;
  role: 'user' | 'samurai';
}

interface MessageCreationAttributes extends Optional<MessageAttributes, 'id'> {}

export class Message extends Model<MessageAttributes, MessageCreationAttributes> implements MessageAttributes {
  public id!: number;
  public conversationId!: number;
  public content!: string;
  public role!: 'user' | 'samurai';

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function initMessage() {
  Message.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      conversationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM('user', 'samurai'),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Message',
      tableName: 'Messages',
      timestamps: true,
    }
  );
  return Message;
}

export default Message;
