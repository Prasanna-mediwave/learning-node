const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");
const moment = require("moment");

const productSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4,
  },
  productName: {
    type: String,
  },
  price: {
    type: Number,
  },
  active: {
    type: Boolean,
    default: true,
  },
  date: {
    type: Date,
    default: moment(),
  },
});

const cartSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4,
  },
  userId: {
    type: String,
  },
  productId: {
    type: String,
  },
  placeOrder: {
    type: String,
    default: "pending",
  },
});

const productModel = mongoose.model("product", productSchema);

const cartModel = mongoose.model("addToCart", cartSchema);

module.exports = { cartModel, productModel };
