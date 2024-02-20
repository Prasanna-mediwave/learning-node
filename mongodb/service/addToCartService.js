const customerModel = require("../model/customermodel");
const { cartModel } = require("../model/productModel");

const createCart = async (body) => {
  const data = await cartModel.create(body);
  return data;
};

const getCartByUser = async (id) => {
  const user = await customerModel.aggregate([
    {
      $match: {
        _id: id,
      },
    },
    {
      $lookup: {
        from: "addtocarts",
        localField: "_id",
        foreignField: "userId",
        as: "cartData",
      },
    },
    {
      $lookup: {
        from: "products",
        localField: "cartData.productId",
        foreignField: "_id",
        as: "productData",
        pipeline: [
          //   {
          //     $match: {
          //       active: true,
          //     },
          //   },
          {
            $project: {
              __v: 0,
              active: 0,
            },
          },
        ],
      },
    },
    {
      $project: {
        _id: 0,
        name: 1,
        lastName: 1,
        email: 1,
        mobileNumber: 1,
        productData: 1,
        totalPrice: { $sum: "$productData.price" },
        priceSize: { $size: "$productData.productName" },
        // productName: "$productData.productName",
        // productPrice: "$productData.price",
      },
    },
  ]);

  return user;
};
module.exports = {
  createCart,
  getCartByUser,
};
