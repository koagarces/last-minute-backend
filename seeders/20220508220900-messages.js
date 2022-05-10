"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    {
      return queryInterface.bulkInsert(
        "messages",
        [
          {
            userId: 1,
            matchId: 1,
            description: "hello, are you interested in coming?",
          },
          {
            userId: 2,
            matchId: 1,
            description: "hi, I am!",
          },
        ],
        {}
      );
    }
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("messages", null, {});
  },
};
