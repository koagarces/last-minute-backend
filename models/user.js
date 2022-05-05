"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init(
    {
      firstName: DataTypes.STRING,
      sex: DataTypes.STRING,
      email: DataTypes.STRING,
      userName: DataTypes.STRING,
      password: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      about: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user",
      tableName: "users",
    }
  );
  return user;
};
