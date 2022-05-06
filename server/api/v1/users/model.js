const mongoose = require("mongoose");
const { Schema } = mongoose;

const fields = {  
  firstname: {
    type: String,  
    required: true
  },
  lastname: {
    type: String,  
    required: true
  },
  email: {
    type: String,  
    required: true
  },
  status: {
    type: Boolean,
    default: true
  }
};

const user = new Schema(fields, {
  timestamps: true
});

module.exports = {
  Model: mongoose.model("user", user),
  fields  
};