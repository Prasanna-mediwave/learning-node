const { productModel } = require("../model/productModel");

const createProduct = async (body) => {
  const data = await productModel.create(body);
  return data;
};

module.exports = {
  createProduct,
};
