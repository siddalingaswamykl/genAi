import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

export class Vehicle extends Model {}

Vehicle.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  make: DataTypes.STRING,
  model: DataTypes.STRING,
  year: DataTypes.INTEGER,
  configuration: DataTypes.JSONB,
}, {
  sequelize,
  modelName: 'vehicle',
});