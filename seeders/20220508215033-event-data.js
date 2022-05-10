"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    {
      return queryInterface.bulkInsert(
        "events",
        [
          {
            eventName: "Baby Shower",
            date: "August 26th",
            description: "I need a date to attend my sisters Baby Shower",
            image:
              "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F34%2F2021%2F02%2F03%2Fmother-seated-at-baby-shower-0221.png",
            userId: 1,
            searching: true,
          },
          {
            eventName: "Christmas",
            date: "July 10th",
            description:
              "I need a date to christmas. All my siblings have one but me",
            image:
              "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F34%2F2021%2F02%2F03%2Fmother-seated-at-baby-shower-0221.png",
            userId: 2,
            searching: true,
          },
        ],
        {}
      );
    }
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("events", null, {});
  },
};
