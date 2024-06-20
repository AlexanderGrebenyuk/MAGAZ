const router = require("express").Router();
// const { User } = require("../../db/models");
const bcrypt = require("bcrypt");
const generateTokens = require("../../utils/authUtils");
const jwtConfig = require("../../config/jwtConfig");

router.post("/registration", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
      res.status(400).json({ message: "заполните все поля" });
      return;
    }
    const userInDb = await User.findOne({ where: { email } });
    if (userInDb) {
      res
        .status(400)
        .json({ message: "Ай-Ай! Пользователь уже зарегестрирован" });
      return;
    }
    const hashPassword = await bcrypt.hash(password, 10);
    // delete user.dataValues.password
    // const { accessToken, refreshToken } = generateTokens({ user });
    if (user) {
      res
        .status(201)
        //либо пишите ручкамм 'refresh'
        .cookie("refresh", refreshToken, { httpOnly: true })
        .json({ message: "success", user, accessToken });
      return;
    }

    res.status(400).json({ message: "Что-то пошло не так" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.post("/authorization", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email.trim() === "" || password.trim() === "") {
      res.status(400).json({ message: "заполните все поля" });
      return;
    }
    const user = awaitUser.findOne({ where: { email } });
    if (user) {
      const isCompare = await bcrypt.compare(password, user.password);
      if (isCompare) {
        delete user.dataValues.password;
        const { accessToken, refreshToken } = generateTokens({ user });
        res.status(200).cookie("refresh", refreshToken, { httpOnly: true });
        //   .json({ message: "success", accessToken, user });
        return;
      }
    }
    res.status(400).json({ message: "email или пароль не совпадают" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});
//
router.get('/logout', (req, res) => {
    res.locals.user = undefined;
    res.status(200).clearCookie('refresh').json({ message: 'success' });
  });
  // what?
module.exports = router;
