const customerService = require("../service/customerService");
const customerModel = require("../model/customermodel");

const createCustomer = async (req, res) => {
  const userData = await customerService.createCustomerData(req.body);
  res.send(userData);
};

const getCustomer = async (req, res) => {
  const customerData = await customerService.getCustomer();
  res.send(customerData);
};

const getCustomerById = async (req, res) => {
  const getcustomer = await customerService.getCustomerById(req.params.id);
  res.send(getcustomer);
};

const deleteCustomer = async (req, res) => {
  const deleteData = await customerService.deleteCustomer(req.params.id);
  res.send(deleteData);
};

const updateCustomer = async (req, res) => {
  const updateData = await customerService.updateCustomer(
    req.params.id,
    req.body
  );
  res.send(updateData);
};
const authData = async (req, res) => {
  const { email, password } = req.body;
  const checkEmail = await customerModel.findOne({ email: email });
  const checkpass = await customerModel.findOne({ password: password });

  if (!checkEmail || !checkpass) {
    res.status(401).json({ error: "invalid" });
  } else {
    res.send(checkEmail);
  }
  // const authData = await customerService.authLogin(req.body);
  // res.send(authData);
};
const getProductsByPage = async (req, res) => {
  const products = await customerService.getProductsByPage(req.params.page);
  res.send(products);
};
module.exports = {
  createCustomer,
  getCustomer,
  getCustomerById,
  deleteCustomer,
  updateCustomer,
  authData,
  getProductsByPage,
};
