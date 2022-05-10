"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    {
      return queryInterface.bulkInsert(
        "users",
        [
          {
            firstName: "Ethan",
            sex: "male",
            email: "ethans@gmail.com",
            userName: "ethans",
            passwordDigest: "1234",
            city: "LA",
            state: "CA",
            about: "car guy",
          },
          {
            firstName: "Sasha",
            sex: "female",
            email: "sashas@gmail.com",
            userName: "sashas",
            passwordDigest: "1234",
            city: "LA",
            state: "CA",
            about: "music girl",
          },
          {
            firstName: "Sarah",
            sex: "female",
            email: "sarahs@gmail.com",
            userName: "sarahs",
            passwordDigest: "1234",
            city: "LA",
            state: "CA",
            about: "cheer girl",
          },
        ],
        {}
      );
    }
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("users", null, {});
  },
};
