"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    {
      return queryInterface.bulkInsert(
        "matches",
        [
          {
            userId: 1,
            eventId: 1,
          },
          {
            userId: 2,
            eventId: 1,
          },
        ],
        {}
      );
    }
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("matches", null, {});
  },
};
