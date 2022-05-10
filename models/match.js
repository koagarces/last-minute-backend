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
      Match.belongsTo(models.User, {
        foreignKey: "userId",
      }),
        Match.belongsTo(models.Event, {
          foreignKey: "eventId",
        }),
        Match.hasMany(models.Message, {
          foreignKey: "matchId",
          onDelete: "cascade",
          onUpdate: "cascade",
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
          Key: "id",
        },
      },
      eventId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: "eventId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        references: {
          model: "users",
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
