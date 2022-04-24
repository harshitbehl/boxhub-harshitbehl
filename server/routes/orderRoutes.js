const express = require("express");
const {
  getAllOrders,
  createOrder,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");

const router = express.Router();

router.route("/").get(getAllOrders).post(createOrder);
router.route("/:id").patch(updateOrder).delete(deleteOrder);

module.exports = router;
