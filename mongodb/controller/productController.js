const productService = require("../service/productService");

const createProductData = async (req, res) => {
  const userData = await productService.createProduct(req.body);
  res.send(userData);
};

module.exports = {
  createProductData,
};
