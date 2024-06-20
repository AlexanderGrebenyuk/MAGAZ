const router = require("express").Router();
// const {} = require       подтянуть usera
const bcrypt = require("bcrypt");
const generateTokens = require("../../utils/authUtils");

router.get("/", async (req, res) => {
  try {
    // const users = await User.finddAll({ where: req.query });
    res.status(200).json({ message: "success", movicardses });
  } catch ({ message }) {
    res.json({ error: message });
  }
});
router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findOne({ where: { id: userId } });
    res.status(200).json({ message: "success", user });
  } catch ({ message }) {
    res.json({ error: message });
  }
});
module.exports = router;
