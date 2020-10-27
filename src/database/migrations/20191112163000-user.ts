import { QueryInterface, DataTypes } from 'sequelize';
import { User } from '../models';

/**
 * function that sequelize-cli runs if you want to add this migration to your database
 * */
export async function up(query: QueryInterface) {
  try {
    return query.createTable(User.TableName, {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        comment: 'Id of the instance',
      },
      name: {
        type: new DataTypes.STRING(),
        allowNull: false,

        comment: 'Unique display name of the user',
      },
      email: {
        type: new DataTypes.STRING(255),
        allowNull: false,
        comment: 'First name of the user',
      },
      password: {
        type: new DataTypes.STRING(255),
        allowNull: false,
        comment: 'Last name of the user',
      },

      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        comment: 'Date of creation',
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        comment: 'Date of the last update',
      },
      deletedAt: DataTypes.DATE,
    });
  } catch (e) {
    return Promise.reject(e);
  }
}

/**
 * function that sequelize-cli runs if you want to remove this migration from your database
 * */
export async function down(query: QueryInterface) {
  try {
    return query.dropTable(User.TableName);
  } catch (e) {
    return Promise.reject(e);
  }
}
