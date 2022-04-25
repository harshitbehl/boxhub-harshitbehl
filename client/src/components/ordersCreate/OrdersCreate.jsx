import React from "react";
import "./OrdersCreate.scss";

import OrdersForm from "../ordersForm/OrdersForm";
import validationSchema from "../../utils/helpers/ordersFormValidation";
import axios from "axios";

function OrdersCreate() {
  // Create order handler
  const handleCreate = async (values, { resetForm }) => {
    try {
      await axios.post(
        "https://boxhubapi-harshitbehl.herokuapp.com/api/v1/orders",
        values
      );
    } catch (error) {
      console.log(error);
    }

    // Reset field values after submission
    resetForm({ values: "" });
  };

  return (
    <section className="orders-create">
      <div className="orders-create__container main-container">
        <div className="orders-create__top">
          <h3 className="orders-create__title">Create Order</h3>
        </div>
        <div className="orders-create__bottom">
          <div className="orders-create__bottom-graphics"></div>
          <div className="orders-create__bottom-content">
            <OrdersForm
              submitHandler={handleCreate}
              submitButton="Create"
              validationSchema={validationSchema}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrdersCreate;
