import React from "react";
import "./OrdersCreate.scss";

import OrdersForm from "../ordersForm/OrdersForm";
import axios from "axios";

const handleCreate = async (values, { resetForm }) => {
  try {
    await axios.post("/api/v1/orders", values);
    console.log("Order Created");
  } catch (error) {
    console.log(error);
  }

  resetForm({ values: "" });
};

function OrdersCreate() {
  return (
    <section className="orders-create">
      <div className="orders-create__container main-container">
        <div className="orders-create__top">
          <h3 className="orders-create__title">Create Order</h3>
        </div>
        <div className="orders-create__bottom">
          <div className="orders-create__bottom-graphics">ddf</div>
          <div className="orders-create__bottom-content">
            <OrdersForm submitHandler={handleCreate} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrdersCreate;
