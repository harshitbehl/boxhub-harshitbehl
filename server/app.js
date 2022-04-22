const express = require("express");
const app = express();
const orderRouter = require("./routes/orderRoutes");

// Middleware JSON body parser
app.use(express.json());

// Routes
app.use("/api/v1/orders", orderRouter);

// App Export
module.exports = app;
