"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Match extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Message.belongsTo(models.User, {
        foreignKey: "userId",
      }),
        Message.belongsTo(models.Event, {
          foreignKey: "eventId",
        }),
        Message.hasMany(models.Message, {
          foreignKey: "messageId",
          as: "chats",
        });
    }
  }
  Match.init(
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: "userId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        references: {
          model: "users",
          as: "matches",
          Key: "id",
        },
      },
      messageId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: "matchId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        references: {
          model: "messages",
          as: "people",
          Key: "id",
        },
      },
      eventId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: "userId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        references: {
          model: "events",
          Key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Match",
      tableName: "matches",
    }
  );
  return Match;
};
