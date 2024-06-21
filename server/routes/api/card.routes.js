const router = require('express').Router();
const { Card } = require('../../db/models');
const verifyAccessToken = require('../../middleware/verifyAccessToken');

router.get('/', async (req, res) => {
  try {
    const cards = await Card.findAll();
    res.status(200).json({ message: 'success', cards });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.get('/:cardId', async (req, res) => {
  const { cardId } = req.params;
  try {
    const card = await Card.findOne({ where: { id: cardId } });
    res.status(200).json({ message: 'success', card });
  } catch ({ message }) {
    res.json({ error: message });
  }
});

router.post('/', verifyAccessToken, async (req, res) => {
  const { user } = res.locals;
  const { name, img, price, wearRate, city } = req.body;
  try {
    const card = await Card.create({
      name,
      img,
      price,
      wearRate,
      city,
      userId: user.id,
    });

    if (card) {
      res.status(200).json({ message: 'success', card });
      return;
    }

    res.status(400).json({ message: 'Произошла неприятность' });
  } catch ({ message }) {
    res.json({ error: message });
  }
});

router.put('/:cardId', verifyAccessToken, async (req, res) => {
  const { user } = res.locals;
  const { cardId } = req.params;
  const { name, img, price, wearRate, city } = req.body;
  try {
    const result = await Card.update(
      {
        name,
        img,
        price,
        wearRate,
        city,
        userId: user.id,
      },
      { where: { id: cardId } }
    );

    if (result[0] > 0) {
      const card = await Card.findOne({ where: { id: cardId } });

      res.status(200).json({ message: 'success', card });
      return;
    }

    res.status(400).json({ message: 'Не твоя, вот и бесишься' });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.delete('/:cardId', verifyAccessToken, async (req, res) => {
  const { cardId } = req.params;
  const { user } = res.locals;
  try {
    const card = await Card.destroy({ where: { id: cardId, userId: user.id } });
    if (card > 0) {
      res.status(200).json({ message: 'success', card });
      return;
    }

    res.status(400).json({ message: 'Не удалось делитнуть' });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
