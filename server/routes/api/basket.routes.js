const router = require("express").Router();
const { Basket, Card, BasketLine } = require("../../db/models");
const verifyAccessToken = require("../../middleware/verifyAccessToken");

router.get("/", verifyAccessToken, async (req, res) => {
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

      res.status(200).json({ message: "success", basketCards });
      return;
    }
    res.status(400).json({ message: "что-то пошло не так" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

//Получение одной корзины
router.get("/:basketId", async (req, res) => {
  const { basketId } = req.params;

  try {
    const basket = await Basket.findOne(
      {
        include: [
          {
            model: Card,
            through: {
              attributes: [],
            },
          },
        ],
      },
      { where: { id: basketId } }
    );

    if (basket) {
      res.status(200).json({ message: "success", basket });
      return;
    }
    res.status(400).json({ message: "что-то пошло не так" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

// создание BasketLine ДОДЕЛАТЬ
router.post("/", async (req, res) => {
  const { cardId, basketId } = req.body;
  const { user } = res.locals;
  try {
    const basket = await Basket.findOne({ where: { userId: user.id } });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
