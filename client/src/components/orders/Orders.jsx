import React, { useEffect, useState } from "react";
import ordersData from "../../assets/ordersData/orders.json";
import { DataGrid } from "@mui/x-data-grid";
import "./Orders.scss";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = () => {
      try {
        setOrders(ordersData.orders);
      } catch (error) {
        console.log(error);
      }
    };
    getOrders();
  }, [orders]);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
      headerAlign: "center",
    },
    {
      field: "photo",
      headerName: "Photo",
      headerAlign: "center",
      renderCell: (params) => (
        <div className="orders-datagrid__image-container">
          <img src={params.row.photo} alt={`${params.row.id}`} />
        </div>
      ),
    },
    {
      field: "created",
      headerName: "Created",
      width: 110,
      headerClassName: "orders-datagrid__header",
      headerAlign: "center",
    },
    {
      field: "status",
      headerName: "Status",
      width: 110,
      headerClassName: "orders-datagrid__header",
      headerAlign: "center",
    },
    {
      field: "customer",
      headerName: "Customer",
      width: 160,
      headerClassName: "orders-datagrid__header",
      headerAlign: "center",
    },
    {
      field: "sku",
      headerName: "SKU",
      width: 130,
      headerClassName: "orders-datagrid__header",
      headerAlign: "center",
    },
    {
      field: "condition",
      headerName: "Condition",
      width: 140,
      headerClassName: "orders-datagrid__header",
      headerAlign: "center",
    },
    {
      field: "size",
      headerName: "Size",
      width: 60,
      headerClassName: "orders-datagrid__header",
      headerAlign: "center",
    },
    {
      field: "type",
      headerName: "Type",
      headerClassName: "orders-datagrid__header",
      headerAlign: "center",
    },
    {
      field: "origin_address",
      headerName: "Origin Address",
      width: 250,
      headerClassName: "orders-datagrid__header",
      headerAlign: "center",
    },
    {
      field: "shipping_address",
      headerName: "Shipping Address",
      width: 250,
      headerClassName: "orders-datagrid__header",
      headerAlign: "center",
    },
  ];

  //   console.log(orders);
  return (
    <section className="orders">
      <div className="orders__container main-container">
        <div className="orders__top">
          <h3 className="orders__title">Orders</h3>
        </div>
        <div className="orders__bottom">
          <DataGrid
            rows={orders}
            columns={columns}
            initialState={{
              sorting: { sortModel: [{ field: "created", sort: "desc" }] },
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Orders;
