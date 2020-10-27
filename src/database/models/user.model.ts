import { DataTypes, FindOptions, Model, ModelCtor, Sequelize } from 'sequelize';
import { BaseModel } from './base';
import { Interview } from './interview.model';

// defining properties for our User model
export interface IUser {
  id?: string;
  name: string;
  email?: string;
  password?: string;

  createdAt?: Date;
  updatedAt?: Date;
}

export class User extends BaseModel implements IUser {
  public static readonly ModelName: string = 'User';
  public static readonly ModelNamePlural: string = 'Users';
  public static readonly TableName: string = 'Users';
  public static readonly DefaultScope: FindOptions = {};

  public id!: string;
  public name!: string;
  public email: string;
  public password: string;

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
        name: new DataTypes.STRING(),
        email: new DataTypes.STRING(255),
        password: new DataTypes.STRING(255),
      },
      {
        sequelize: sequelize,
        tableName: this.TableName,
        name: {
          singular: this.ModelName,
          plural: this.ModelNamePlural,
        },
        defaultScope: this.DefaultScope,
        comment: 'Model for the public accessible data of an user',
      },
    );
  }

  public static setAssociations(modelCtors: {
    [modelName: string]: ModelCtor<Model>;
  }) {
    User.hasMany(modelCtors.Interview);
    // place to set model associations
  }

  // endregion

  // region Instance Model methods

  // endregion
}
