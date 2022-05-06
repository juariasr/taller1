const mongoose = require("mongoose");
const { Schema } = mongoose;

const fields = {
  description: {
    type: String,  
    required: true
  },
  userId: {
    type: String,
    required: true
  }  
};

const task = new Schema(fields, {
  timestamps: true
});

module.exports = mongoose.model("task", task);
