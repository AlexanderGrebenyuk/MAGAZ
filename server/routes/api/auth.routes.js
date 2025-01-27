const router = require("express").Router();
const { User, Basket } = require("../../db/models");
const bcrypt = require("bcrypt");
const generateTokens = require("../../utils/authUtils");

router.post("/registration", async (req, res) => {
  try {
    const { name, email, password, city } = req.body;

    if (
      name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      city.trim() === ""
    ) {
      res.status(400).json({ message: "заполните все поля" });
      return;
    }

    console.log("asd");
    const userInDb = await User.findOne({ where: { email } });
    if (userInDb) {
      res
        .status(400)
        .json({ message: "Такой пользователь уже зарегестрирован" });
      return;
    }
    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashPassword,
      city,
    });

    delete user.dataValues.password;

    const { accessToken, refreshToken } = generateTokens({ user });

    if (user) {
      const {userId} = req.body
      console.log('+++++',user.dataValues.id);
      const basket = await Basket.create({userId: user.dataValues.id})
      console.log(basket, "hjkl;'\cvbn");
      res
        .status(201)
        .cookie("refresh", refreshToken, { httpOnly: true })
        .json({ message: "success", user, accessToken, basket });
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
    const user = await User.findOne({ where: { email } });
    if (user) {
      const isCompare = await bcrypt.compare(password, user.password);
      if (isCompare) {
        delete user.dataValues.password;
        console.log(user);
        const { accessToken, refreshToken } = generateTokens({ user });
        console.log(refreshToken);
        res
          .status(200)
          .cookie("refresh", refreshToken, { httpOnly: true })
          .json({ message: "success", accessToken, user });
        return;
      }
      res.status(400).json({ message: "email или пароль не совпадают" });
      return;
    }

    res.status(400).json({ message: "email или пароль не совпадают" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.get("/logout", (req, res) => {
  res.locals.user = undefined;
  res.status(200).clearCookie("refresh").json({ message: "success" });
});
module.exports = router;
