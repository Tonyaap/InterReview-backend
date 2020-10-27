import { DataTypes, FindOptions, Model, ModelCtor, Sequelize } from 'sequelize';
import { Json } from 'sequelize/types/lib/utils';
import { BaseModel } from './base';
import { User } from './user.model';

// defining properties for our User model
export interface IInterview {
  id?: string;
  userId: string;
  name: string;
  nervousScore: string;
  rapportScore: string;
  technicalScore: string;
  preparationScore: string;
  bodylanguageScore: string;
  questions: Json;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Interview extends BaseModel implements IInterview {
  public static readonly ModelName: string = 'Interview';
  public static readonly ModelNamePlural: string = 'Interviews';
  public static readonly TableName: string = 'Interviews';
  public static readonly DefaultScope: FindOptions = {};

  public id!: string;
  public userId!: string;
  public name: string;
  public nervousScore: string;
  public rapportScore: string;
  public technicalScore: string;
  public preparationScore: string;
  public bodylanguageScore: string;
  public questions: Json;

  public createdAt: Date;
  public updatedAt: Date;

  // region Static
  public static prepareInit(sequelize: Sequelize) {
    this.init(
      {
        id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
          comment: 'Id of the instance',
        },
        userId: new DataTypes.STRING(),
        name: new DataTypes.STRING(),
        nervousScore: new DataTypes.STRING(),
        rapportScore: new DataTypes.STRING(),
        technicalScore: new DataTypes.STRING(),
        preparationScore: new DataTypes.STRING(),
        bodylanguageScore: new DataTypes.STRING(),
        questions: DataTypes.JSON,
      },
      {
        sequelize: sequelize,
        tableName: this.TableName,
        name: {
          singular: this.ModelName,
          plural: this.ModelNamePlural,
        },
        defaultScope: this.DefaultScope,
        comment: 'Model for the public accessible data of an interview',
      },
    );
  }

  public static setAssociations(modelCtors: {
    [modelName: string]: ModelCtor<Model>;
  }) {
    Interview.belongsTo(modelCtors.User);
    // place to set model associations
  }

  // endregion

  // region Instance Model methods

  // endregion
}
