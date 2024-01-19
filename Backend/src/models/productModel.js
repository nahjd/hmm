const mongoose = require("mongoose");

const salamSchema = mongoose.Schema(
  {
    name: String,
    age: String,
    about: String,
  },
  {
    collection: "salam",
    timestamps: true,
  }
);

const Salam = mongoose.model("salam", salamSchema);

module.exports = Salam;
