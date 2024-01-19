const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected MongoDb");
  })
  .catch((err) => {
    console.log("failed" + err);
  });
