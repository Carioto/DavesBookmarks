const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
class Frequent extends Model {}

Frequent.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize
  }
);

module.exports = Frequent;