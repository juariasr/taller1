const mongoose = require("mongoose");

const fields = {
  firstname: String,
  lastname: String,
  email: String,
  createdAt: Date,
  updatedAt: Date,
  _status: Boolean,
};

module.exports = mongoose.model("users", fields);