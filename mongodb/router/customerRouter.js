const express = require("express");
const router = express.Router();
const customerController = require("../controller/customerController");

router.route("/create/customer").post(customerController.createCustomer);

// get all
router.route("/get/customer").get(customerController.getCustomer);

// get by id
router.route("/get/customer/:id").get(customerController.getCustomerById);

router.route("/delete/customer/:id").delete(customerController.deleteCustomer);

// update
router
  .route("/update/customer/detail/:id")
  .put(customerController.updateCustomer);

router.route("/login").post(customerController.authData);
// pagination
router.route("/get/products/:page").get(customerController.getProductsByPage);

module.exports = router;
