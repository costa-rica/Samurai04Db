import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from './_connection';

interface ConversationAttributes {
  id: number;
  userId: string;
}

interface ConversationCreationAttributes extends Optional<ConversationAttributes, 'id'> {}

export class Conversation extends Model<ConversationAttributes, ConversationCreationAttributes> implements ConversationAttributes {
  public id!: number;
  public userId!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function initConversation() {
  Conversation.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Conversation',
      tableName: 'Conversations',
      timestamps: true,
    }
  );
  return Conversation;
}

export default Conversation;
