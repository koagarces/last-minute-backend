"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("matches", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
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
        type: Sequelize.INTEGER,
        field: "matchId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        references: {
          model: "messages",
          as: "people",
          Key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("matches");
  },
};
