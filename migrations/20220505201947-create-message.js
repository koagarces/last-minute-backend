"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("messages", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      matchId: {
        allowNull: false,
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("messages");
  },
};
