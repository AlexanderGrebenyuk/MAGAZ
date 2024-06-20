const router = require("express").Routes();

const cardRoutes = require("./api/card.routes");
const cartRoutes = require("./api/cart.routes");
const userRoutes = require("./api/user.routes");
const authRoutes = require("./api/auth.routes");

router.use("/card", cardRoutes);
router.use("/cart", cartRoutes);
router.use("/user", userRoutes);
router.use("/auth", authRoutes);
module.exports = router;
