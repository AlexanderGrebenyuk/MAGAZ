"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ BasketLine, Basket, User }) {

      this.belongsToMany(Basket, {
        through: BasketLine,
        foreignKey: 'basketId',
        otherKey: 'cardId'

      })
      this.belongsTo(User, {
        foreignKey: "userId"
      })
    }
  }
  Card.init(
    {
      name: DataTypes.STRING,
      img: DataTypes.STRING,
      price: DataTypes.INTEGER,
      wearRate: DataTypes.STRING,
      city: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Card",
    }
  );
  return Card;
};
