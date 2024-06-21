"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Cards",
      [
        {
          name: "Лерыч",
          img: "/1.png",
          price: 100000,
          wearRate: "низкая",
          city: "Тюмень",
          userId: 1,
        },
        {
          name: "Саня великий",
          img: "/2.png",
          price: 777,
          wearRate: "высокая",
          city: "Сосновый Бор",
          userId: 2,
        },
        {
          name: "Олегжан",
          img: "/3.png",
          price: 40000,
          wearRate: "средняя",
          city: "СПб",
          userId: 3,
        },
        {
          name: "Ержаныч",
          img: "/4.png",
          price: 140000,
          wearRate: "высокая",
          city: "Якутск",
          userId: 2,
        },
        {
          name: "Кудрявыч",
          img: "/5.png",
          price: 540000,
          wearRate: "средняя",
          city: "Иркутск",
          userId: 1,
        },
        {
          name: "Пахом",
          img: "/6.png",
          price: 1000,
          wearRate: "высокая",
          city: "Екатеринбург",
          userId: 2,
        },
        {
          name: "Копатыч",
          img: "/7.png",
          price: 14000,
          wearRate: "низкая",
          city: "Омск",
          userId: 1,
        },
        {
          name: "Спазмалгон",
          img: "/8.png",
          price: 60000,
          wearRate: "средняя",
          city: "Томск",
          userId: 3,
        },
        {
          name: "Идор",
          img: "/9.png",
          price: 840000,
          wearRate: "низкая",
          city: "Санкт-Петербург",
          userId: 2,
        },
        {
          name: "КарКарыч",
          img: "/10.png",
          price: 8000,
          wearRate: "средняя",
          city: "Мегион",
          userId: 1,
        },
        {
          name: "Повидлыч",
          img: "/11.png",
          price: 300,
          wearRate: "высокая",
          city: "Астрахань",
          userId: 3,
        },
        {
          name: "Олегыч",
          img: "/12.png",
          price: 6700,
          wearRate: "низкая",
          city: "Москва",
          userId: 2,
        },
        {
          name: "Машыч",
          img: "/13.png",
          price: 9500,
          wearRate: "средняя",
          city: "Краснодар",
          userId: 1,
        },
        {
          name: "Монголыч",
          img: "/14.png",
          price: 60000,
          wearRate: "высокая",
          city: "Сочи",
          userId: 1,
        },
        {
          name: "Пупок",
          img: "/15.png",
          price: 64000,
          wearRate: "средняя",
          city: "Волгоград",
          userId: 2,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Cards", null, {});
  },
};
