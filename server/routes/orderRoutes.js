const express = require("express");
const {
  getAllOrders,
  createOrder,
  updateOrder,
  deleteOrder,
  getOrder,
} = require("../controllers/orderController");

const router = express.Router();

router.route("/").get(getAllOrders).post(createOrder);
router.route("/:id").get(getOrder).patch(updateOrder).delete(deleteOrder);

module.exports = router;
