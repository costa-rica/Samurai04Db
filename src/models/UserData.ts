import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from './_connection';

interface UserDataAttributes {
  id: number;
  userId: string;
  pathToFile: string;
  filename: string;
}

interface UserDataCreationAttributes extends Optional<UserDataAttributes, 'id'> {}

export class UserData extends Model<UserDataAttributes, UserDataCreationAttributes> implements UserDataAttributes {
  public id!: number;
  public userId!: string;
  public pathToFile!: string;
  public filename!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function initUserData() {
  UserData.init(
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
      pathToFile: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      filename: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'UserData',
      tableName: 'UserDatas',
      timestamps: true,
    }
  );
  return UserData;
}

export default UserData;
