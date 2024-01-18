const express = require("express");
const router = express.Router();
const cartController = require("../controller/cartController");

router.route("/cart").post(cartController.createCartData);
router.route("/get/cart/:id").get(cartController.getCartByUser);

module.exports = router;
