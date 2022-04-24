import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import axios from "axios";
import { FaTrashAlt } from "react-icons/fa";
import "./Orders.scss";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await axios.get("/api/v1/orders");
        setOrders(res.data.data.orders);
      } catch (error) {
        console.log(error);
      }
    };
    getOrders();
  }, [orders]);

  // Delete Order Handler
  const handleDelete = async (docId) => {
    await axios.delete(`/api/v1/orders/${docId}`);
  };

  // Data Grid Column
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
      renderCell: (params) => <span>{params.value.substring(0, 10)}</span>,
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
    {
      field: "actions",
      headerName: "Actions",
      renderCell: (params) => (
        <div className="orders-datagrid__actions-container">
          <Link to="/update-order">
            <button>Edit</button>
          </Link>

          <FaTrashAlt
            className="orders-datagrid__actions-delete"
            onClick={() => handleDelete(params.row._id)}
          />
        </div>
      ),
      width: 150,
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
