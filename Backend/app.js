const express = require("express");
const app = express();
const port = process.env.MONGODB_URI || 3000;
const router = require("./src/routes/productRoutes");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();
require("./src/config/db");

app.use(bodyParser.json());
app.use(cors());
app.use("/", router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
