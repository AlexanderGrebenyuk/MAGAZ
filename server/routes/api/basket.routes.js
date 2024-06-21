const router = require('express').Router();
const { Basket, Card, BasketLine } = require('../../db/models');
const verifyAccessToken = require('../../middleware/verifyAccessToken');

router.get('/', verifyAccessToken, async (req, res) => {
  try {
    const { user } = res.locals;
    if (user) {
      const basketCards = await Basket.findOne({
        where: { userId: user.id },
        include: [
          {
            model: Card,
            through: {
              attributes: [],
            },
          },
        ],
      });

      res.status(200).json({ message: 'success', basketCards });
      return;
    }
    res.status(400).json({ message: 'что-то пошло не так' });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

//Получение одной корзины
// router.get("/:basketId", verifyAccessToken, async (req, res) => {
//   const { basketId } = req.params;
//   const { user } = res.locals;
//   try {
//     const basket = await Basket.findOne(
//       {
//         include: [
//           {
//             model: Card,
//             through: {
//               attributes: [],
//             },
//           },
//         ],
//       },
//       { where: { id: basketId, userId: user.id } }
//     );

//     if (basket) {
//       res.status(200).json({ message: "success", basket });
//       return;
//     }
//     res.status(400).json({ message: "что-то пошло не так" });
//   } catch ({ message }) {
//     res.status(500).json({ error: message });
//   }
// });

// создание BasketLine ДОБАВИТЬ ВЕРИФАЙ
router.post('/', verifyAccessToken, async (req, res) => {
  console.log(1);
  const { cardId, basketId } = req.body;
  const { user } = res.locals;
  let basket;
  try {
    basket = await Basket.findOne({ where: { id: basketId } });
    if (!basket) {
      basket = await Basket.create({ userId: user.id });
    }
    if (basket && cardId) {
      const basketLine = await BasketLine.create({
        cardId,
        basketId: basket.id,
      });
      res.status(201).json({ message: 'success', basketLine });
      return;
    }
    res.status(400).json({ message: 'что-то пошло не так' });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

//удаление BasketLine

router.delete(
  '/basketLines/:basketLinesId',
  verifyAccessToken,
  async (req, res) => {
    const { basketLinesId } = req.params;
    try {
      const { user } = res.locals;
      const basket = await Basket.findOne({
        where: { userId: user.id },
      });
      const basketLine = await BasketLine.findOne({
        where: { basketId: basketLinesId },
      });
      console.log(basketLine);
      if (basket && basketLine) {
        const result = await BasketLine.destroy({
          where: { basketId: basketLinesId },
        });
        if (result > 0) {
          res.status(200).json({ message: 'success', result });
          return;
        }
      }
      res.status(400).json({ message: 'что-то пошло не так' });
    } catch ({ message }) {
      res.status(500).json({ error: message });
    }
  }
);

module.exports = router;
