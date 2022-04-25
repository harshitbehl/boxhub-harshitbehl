const Order = require("../models/orderModel");

// Get All Orders | GET Request

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();

    res.status(200).json({
      status: "success",
      results: orders.length,
      data: {
        orders: orders,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      data: error,
    });
  }
};

// Creating New Order | POST Request

const createOrder = async (req, res) => {
  try {
    const newOrder = await Order.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        order: newOrder,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      data: error,
    });
  }
};

// Update Order | PATCH Request

const updateOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: {
        order: order,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      data: error,
    });
  }
};

// Delete Order | DELETE Request
const deleteOrder = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      data: error,
    });
  }
};

// Get Specific Order | GET Request
const getOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) throw "No order found with that ID";

    res.status(200).json({
      status: "success",
      data: {
        order: order,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      data: error,
    });
  }
};

module.exports = {
  getAllOrders,
  createOrder,
  updateOrder,
  deleteOrder,
  getOrder,
};
