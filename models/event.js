"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  event.init(
    {
      eventName: DataTypes.STRING,
      date: DataTypes.STRING,
      description: DataTypes.STRING,
      image: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      searching: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "event",
      tableName: "events",
    }
  );
  return event;
};
