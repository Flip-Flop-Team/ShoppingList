const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  name: String,
  state: Boolean
});

module.exports = mongoose.model("Item", ItemSchema);
