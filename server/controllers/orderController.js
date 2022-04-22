// Get All Orders | GET Request

const getAllOrders = async (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: {
        orders: "orders",
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      data: error,
    });
  }
};

// Creating New Order | POST Request

const createOrder = async (req, res) => {};

// Update Order | PATCH Request

const updateOrder = async (req, res) => {};

module.exports = {
  getAllOrders,
  createOrder,
  updateOrder,
};
