const customerModel = require("../model/customermodel");
const { productModel } = require("../model/productModel");

const createCustomerData = async (body) => {
  const data = await customerModel.create(body);
  return data;
};

const getCustomer = async () => {
  const customer = await customerModel.find({});
  return customer;
};

const getCustomerById = async (id) => {
  const customer = await customerModel.aggregate([
    // {
    //   $match: {
    //     _id: id,
    //   },
    // },
    // {
    //   $match: {
    //     $and: [{ _id: { $eq: id } }],
    //   },
    // },

    // {
    //   $match: {
    //     $and: [{ _id: { $ne: id } }],
    //   },
    // },

    // {
    //   $match: {
    //     $and: [{ _id: { $eq: id } }, { name: { $eq: "raj" } }],
    //   },
    // },

    {
      $match: {
        $nor: [{ _id: { $eq: id } }, { name: { $eq: "raj" } }],
      },
    },
  ]);
  return customer;
  // const customer = await customerModel.find({ _id: id });
  // return customer[0];
};

const deleteCustomer = async (id) => {
  const findCustomerId = await customerModel.findById(id);
  if (!findCustomerId) {
    console.log("user Not found");
  }
  const updateCustomer = await customerModel.findByIdAndDelete({ _id: id });
  return updateCustomer;
};

const updateCustomer = async (id, body) => {
  const findCustomerId = await customerModel.findById(id);
  if (!findCustomerId) {
    console.log("user Not found");
  }
  const updateData = await customerModel.findByIdAndUpdate({ _id: id }, body, {
    new: true,
  });
  return updateData;
};
const authLogin = async (body) => {
  const { email, password } = body;
  const findlogin = await customerModel.findOne({ email: email });
  const findPassword = await customerModel.findOne({ password: password });
  if (findlogin && findPassword) {
    console.log("User login connected");
  } else console.log("Inviled email and password");
  // const loginData = await customerModel.aggregate([
  //   {
  //     $match: {
  //       $and: [{ email: { $eq: email } }, { password: { $eq: password } }],
  //     },
  //   },
  // ]);
  // return loginData;
};
const getProductsByPage = async (page) => {
  const product = await productModel.aggregate([
    { $skip: page * 5 },
    { $limit: 5 },
  ]);
  return product;
};
module.exports = {
  createCustomerData,
  getCustomer,
  getCustomerById,
  deleteCustomer,
  updateCustomer,
  authLogin,
  getProductsByPage,
};
