const mongoose = require("mongoose");

const fields = {
  firstname: String,
  lastname: String,
  email: String,
  createdAt: Date,
  updatedAt: Date,
};

module.exports = mongoose.model("users", fields);