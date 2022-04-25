const express = require("express");
const cors = require("cors");
const app = express();
const orderRouter = require("./routes/orderRoutes");

// Enable Cors
app.use(
  cors({
    origin: "*",
  })
);

// Middleware JSON body parser
app.use(express.json());

// Routes
app.use("/api/v1/orders", orderRouter);

// App Export
module.exports = app;
