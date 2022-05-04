const mongoose = require("mongoose");

const fields = {
  description: String,
  author: String,
  createdAt: Date,
  updatedAt: Date,
};

module.exports = mongoose.model("task", fields);
