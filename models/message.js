"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Message.belongsTo(models.User, {
        foreignKey: "userId",
      }),
        Message.belongsTo(models.Match, {
          foreignKey: "matchId",
        });
    }
  }
  Message.init(
    {
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      matchId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: "matchId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        references: {
          model: "matches",
          as: "chats",
          Key: "id",
        },
      },
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
    },
    {
      sequelize,
      modelName: "Message",
      tableName: "messages",
    }
  );
  return Message;
};
