'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Basket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Card, BasketLine, User }) {
      this.belongsToMany(Card, {
        through: BasketLine,
        foreignKey: 'basketId',
        otherKey: 'cardId',
      }),
        this.belongsTo(User, {
          foreignKey: 'userId',
        });
    }
  }
  Basket.init(
    {
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Basket',
    }
  );
  return Basket;
};
