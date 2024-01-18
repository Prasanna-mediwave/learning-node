const cartService = require("../service/addToCartService");

const createCartData = async (req, res) => {
  const userData = await cartService.createCart(req.body);
  res.send(userData);
};

const getCartByUser = async (req, res) => {
  const cart = await cartService.getCartByUser(req.params.id);
  res.send(cart);
};

module.exports = {
  createCartData,
  getCartByUser,
};
