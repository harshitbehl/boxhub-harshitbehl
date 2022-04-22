const express = require("express");
const {
  getAllOrders,
  createOrder,
  updateOrder,
} = require("../controllers/orderController");

const router = express.Router();

router.route("/").get(getAllOrders).post(createOrder).patch(updateOrder);

module.exports = router;
