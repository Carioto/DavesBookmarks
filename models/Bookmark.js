const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
class Bookmark extends Model {}

Bookmark.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    group: {
      type: DataTypes.STRING,
      allowNull: false,
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
    sequelize,
  },
);

module.exports = Bookmark;
