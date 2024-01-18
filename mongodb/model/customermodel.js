const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const customerSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4,
  },
  name: {
    type: String,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
  },
  lastName: {
    type: String,
  },
  mobileNumber: {
    type: Number,
  },
  active: {
    type: Boolean,
    default: true,
  },
});
const customerModel = mongoose.model("customer", customerSchema);
module.exports = customerModel;
