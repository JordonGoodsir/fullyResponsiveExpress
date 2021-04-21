const mongoose = require("mongoose");

const Test = new mongoose.Schema({
  entry: {
    type: String,
  },
});

module.exports = mongoose.model("Test", Test);
