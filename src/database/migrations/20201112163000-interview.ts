import { QueryInterface, DataTypes } from 'sequelize';
import { Interview } from '../models/interview.model';

/**
 * function that sequelize-cli runs if you want to add this migration to your database
 * */
export async function up(query: QueryInterface) {
  try {
    return query.createTable(Interview.TableName, {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        comment: 'Id of the interview',
      },
      userId: {
        type: DataTypes.UUID,
        references: {
          model: 'Users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      name: {
        type: new DataTypes.STRING(),
        allowNull: false,
        comment: 'Name of the interview',
      },
      nervousScore: {
        type: new DataTypes.STRING(),
        allowNull: false,
        comment: 'Score of nervousness',
      },

      rapportScore: {
        type: new DataTypes.STRING(),
        allowNull: false,
        comment: 'Score of rapport',
      },

      technicalScore: {
        type: new DataTypes.STRING(),
        allowNull: false,
        comment: 'Score of technical ability',
      },

      preparationScore: {
        type: new DataTypes.STRING(),
        allowNull: false,
        comment: 'Score of preparation',
      },

      bodylanguageScore: {
        type: new DataTypes.STRING(),
        allowNull: false,
        comment: 'Score of bodylanguage',
      },

      questions: {
        type: DataTypes.JSON,
        allowNull: true,
        comment: 'All the questions',
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
    console.log('What is e?', e);
    return Promise.reject(e);
  }
}

/**
 * function that sequelize-cli runs if you want to remove this migration from your database
 * */
export async function down(query: QueryInterface) {
  try {
    return query.dropTable(Interview.TableName);
  } catch (e) {
    return Promise.reject(e);
  }
}
