const router = require('express').Router();
const { Basket, Card, BasketLine } = require('../../db/models');
const verifyAccessToken = require('../../middleware/verifyAccessToken');

router.get('/', verifyAccessToken, async (req, res) => {
  try {
    const { user } = res.locals;
    if (user) {
      const basketCards = await Basket.findAll({
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

router.post('/', async (req, res) => {
  const {cardId, basketId} = req.body

  try {
    // const 
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
