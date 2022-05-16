"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Event.belongsTo(models.User, {
        foreignKey: "userId",
      });
      Event.hasMany(models.Match, {
        foreignKey: "eventId",
        onDelete: "cascade",
        onUpdate: "cascade",
      });
    }
  }
  Event.init(
    {
      eventName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: "userId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        references: {
          model: "users",
          as: "users",
          Key: "id",
        },
      },
      searching: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: "Event",
      tableName: "events",
    }
  );
  return Event;
};
