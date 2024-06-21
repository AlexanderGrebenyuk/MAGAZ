"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class BasketLine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Basket, Card }) {
      this.belongsTo(Basket, {
        foreignKey: "basketId",
      });
      this.belongsTo(Card, {
        foreignKey: "cardId",
      });
    }
  }
  BasketLine.init(
    {
      basketId: DataTypes.INTEGER,
      cardId: DataTypes.INTEGER,

    },
    {
      sequelize,
      modelName: "BasketLine",
    }
  );
  return BasketLine;
};
