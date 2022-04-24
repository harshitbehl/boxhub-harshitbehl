const mongoose = require("mongoose");

// Schema
const orderSchema = new mongoose.Schema({
  id: {
    type: String,
    required: [true, "A order must have an ID"],
    unique: true,
    trim: true,
    maxlength: [6, "ID must have exactly 6 digits"],
    minlength: [6, "ID must have exactly 6 digits"],
  },
  created: {
    type: Date,
    default: Date.now(),
  },
  status: {
    type: String,
    required: [true, "A order must have a status"],
    enum: {
      values: ["pending", "in-progress", "delivered"],
      message: "Status is either: pending, in-progress, delivered",
    },
  },
  customer: {
    type: String,
    required: [true, "A order must have a customer"],
    trim: true,
  },
  sku: {
    type: String,
    required: [true, "A order must have a sku"],
    trim: true,
  },
  photo: String,
  condition: {
    type: String,
    required: [true, "A order must have a condition"],
    enum: {
      values: ["new", "cargo-worthy", "wind-watertight"],
      message: "Condition is either: new, cargo-worthy, wind-watertight",
    },
  },
  size: {
    type: String,
    required: [true, "A order must have a size"],
    trim: true,
  },
  type: {
    type: String,
    required: [true, "A order must have a type"],
    enum: {
      values: ["standard", "high-cube"],
      message: "Type is either: standard, high-cube",
    },
  },
  origin_address: {
    type: String,
    required: [true, "A order must have an origin address"],
    trim: true,
  },
  shipping_address: {
    type: String,
    required: [true, "A order must have an shipping address"],
    trim: true,
  },
});

// Model
const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
