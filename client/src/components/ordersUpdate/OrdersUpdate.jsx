import React, { useEffect, useState } from "react";
import "./OrdersUpdate.scss";

import OrdersForm from "../ordersForm/OrdersForm";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function OrdersUpdate() {
  const [order, setOrder] = useState();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getOrder = async () => {
      try {
        const res = await axios.get(
          `https://boxhubapi-harshitbehl.herokuapp.com/api/v1/orders/${params.orderId}`
        );
        setOrder(res.data.data.order);
      } catch (error) {
        console.log(error);
      }
    };
    getOrder();
  }, [params.orderId]);

  // Update handler function
  const handleUpdate = async (values, { resetForm }) => {
    // Remove empty values
    Object.keys(values).forEach((key) => {
      if (values[key] === "") {
        delete values[key];
      }
    });

    try {
      await axios.patch(
        `https://boxhubapi-harshitbehl.herokuapp.com/api/v1/orders/${params.orderId}`,
        values
      );
    } catch (error) {
      console.log(error);
    }
    // Navigate back to Orders after form submission
    navigate("/");

    // Reset form fields after submission
    resetForm({ values: "" });
  };

  return (
    <section className="orders-update">
      <div className="orders-update__container main-container">
        <div className="orders-update__top">
          <h3 className="orders-update__title">Update Order</h3>
        </div>
        <div className="orders-update__bottom">
          <div className="orders-update__bottom-graphics"></div>
          <div className="orders-update__bottom-content">
            <OrdersForm
              submitHandler={handleUpdate}
              submitButton="Update"
              orderValues={order}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrdersUpdate;
