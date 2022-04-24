import React from "react";
import "./OrdersUpdate.scss";

function OrdersUpdate() {
  return (
    <section className="orders-update">
      <div className="orders-update__container main-container">
        <div className="orders-update__top">
          <h3 className="orders-update__title">Update Order</h3>
        </div>
        <div className="orders-update__bottom">
          <div className="orders-update__bottom-graphics"></div>
          <div className="orders-update__bottom-content"></div>
        </div>
      </div>
    </section>
  );
}

export default OrdersUpdate;
