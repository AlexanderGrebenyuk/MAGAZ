const router = require("express").Router()

const cardRoutes = require("./api/card.routes");
const basketRoutes = require("./api/basket.routes");
const authRoutes = require("./api/auth.routes");
const basketLinesRoutes = require('./api/basketLines.routes')
const tokensRoutes = require("./api/tokens.routes");

router.use("/cards", cardRoutes);
router.use("/baskets", basketRoutes);
router.use("/auth", authRoutes);
router.use("/basketLines", basketLinesRoutes);
router.use("/tokens", tokensRoutes);


module.exports = router;
