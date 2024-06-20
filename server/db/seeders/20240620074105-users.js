"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Lerych",
          email: "lerych@mail.ru",
          password: "123",
          city: "Tyumen",
        },
        {
          name: "Sanchos",
          email: "sanchos@mail.ru",
          password: "123",
          city: "Sosnoviy Bor",
        },
        {
          name: "Makha",
          email: "makha@mail.ru",
          password: "123",
          city: "Voronezh",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
