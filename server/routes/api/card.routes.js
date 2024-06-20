const router = require("express").Router();
const { Card } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const cards = await Card.findAll({ where: req.query });
    res
      .status(200)
      .cookie("pechenka", "ochenVkusnay", { maxAge: 9000, httpOnly: true })
      .json({ message: "success", movicardses });
  } catch ({ message }) {
    res.json({ error: message });
  }
});

router.get("/:cardId", async (req, res) => {
  try {
    const { cardId } = req.params;
    const card = await Card.findOne({ where: { id: movieId } });
    res.status(200).json({ message: "success", card });
  } catch ({ message }) {
    res.json({ error: message });
  }
});
router.post("/", verifyAccessToken, async (req, res) => {
  try {
    const { user } = res.locals;
    // const { } = req.body;

    const card = await Card.create({});

    if (card) {
      res.status(200).json({ message: "success", card });
      return;
    }

    res.status(400).json({ message: "Произошла неприятность" });
  } catch ({ message }) {
    res.json({ error: message });
  }
});
router.put("/:cardId", verifyAccessToken, async (req, res) => {
  try {
    // const { user } = res.locals;
    // const { cardId } = req.params;
    // const {  } = req.body;

    // const result = await Card.update(
    
    // );

    if (result[0] > 0) {
      const movie = await Card.findOne({ where: { id: movieId } });

      res.status(200).json({ message: "success", movie });
      return;
    }

    res.status(400).json({ message: "Не твоя, вот и бесишься" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});
module.exports = router;