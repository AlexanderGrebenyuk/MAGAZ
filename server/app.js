const express = require("express");
const removeHeaders = require("./middleware/removeHeaders");
const path = require("path");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const PORT = 3000;

app.use("/api", indexRouter);

app.listen(PORT, () => {
  console.log(`Все курлычит на порту ${PORT}`);
});
