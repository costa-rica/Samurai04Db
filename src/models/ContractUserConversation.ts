import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from './_connection';

interface ContractUserConversationAttributes {
  id: number;
  userId: string;
  conversationId: string;
}

interface ContractUserConversationCreationAttributes extends Optional<ContractUserConversationAttributes, 'id'> {}

export class ContractUserConversation extends Model<ContractUserConversationAttributes, ContractUserConversationCreationAttributes> implements ContractUserConversationAttributes {
  public id!: number;
  public userId!: string;
  public conversationId!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function initContractUserConversation() {
  ContractUserConversation.init(
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
      conversationId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'ContractUserConversation',
      tableName: 'ContractUserConversations',
      timestamps: true,
    }
  );
  return ContractUserConversation;
}

export default ContractUserConversation;
