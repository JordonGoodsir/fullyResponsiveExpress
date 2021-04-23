const mongoose = require("mongoose");

const Story = new mongoose.Schema({
  title: { type: String, required: true },
  wordPrompts: [{ type: String, required: true }],
  body: { type: String, required: true },
});

module.exports = mongoose.model("Story", Story);
