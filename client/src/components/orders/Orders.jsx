import React, { useEffect, useState } from "react";
import ordersData from "../../assets/ordersData/orders.json";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
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
      headerAlign: "center",
    },
    {
      field: "status",
      headerName: "Status",
      width: 110,
      headerAlign: "center",
    },
    {
      field: "customer",
      headerName: "Customer",
      width: 160,
      headerAlign: "center",
    },
    {
      field: "sku",
      headerName: "SKU",
      width: 130,
      headerAlign: "center",
    },
    {
      field: "condition",
      headerName: "Condition",
      width: 140,
      headerAlign: "center",
    },
    {
      field: "size",
      headerName: "Size",
      width: 60,
      headerAlign: "center",
    },
    {
      field: "type",
      headerName: "Type",
      headerAlign: "center",
    },
    {
      field: "origin_address",
      headerName: "Origin Address",
      width: 250,
      headerAlign: "center",
    },
    {
      field: "shipping_address",
      headerName: "Shipping Address",
      width: 250,
      headerAlign: "center",
    },
  ];

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
            components={{ Toolbar: GridToolbar }}
          />
        </div>
      </div>
    </section>
  );
}

export default Orders;
