import React from "react";
import { Routes, Route } from "react-router-dom";
import Orders from "../../components/orders/Orders";
import OrdersCreate from "../../components/ordersCreate/OrdersCreate";
import OrdersUpdate from "../../components/ordersUpdate/OrdersUpdate";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <Routes>
        <Route path="/" element={<Orders />} />
        <Route path="update-order" element={<OrdersUpdate />} />
        <Route path="create-order" element={<OrdersCreate />} />
        <Route path="*" element={<div>Page Not Found!</div>} />
      </Routes>
    </div>
  );
}

export default Home;
