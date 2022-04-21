import React from "react";
import "./Orders.scss";

function Orders() {
  return (
    <section className="orders">
      <div className="orders__container main-container">
        <div className="orders__top">
          <h3 className="orders__title">Orders</h3>
          <input
            type="text"
            placeholder="Search Orders"
            className="orders__search-input"
            // onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div className="orders__bottom">
          {/* Render Orders List */}
          {/* {medicines
            .filter((medicine) =>
              medicine.name.toLowerCase().includes(searchText.toLowerCase())
            )
            .map((medicine) => (
              <div className="orders__product" key={medicine.id}>
                <div className="orders__product-image">
                  <img src={medicine.img} alt={medicine.name} />
                </div>
                <h4>{medicine.name}</h4>

                <button onClick={() => handleClick(medicine)}>
                  Add To Cabinet
                </button>
              </div>
            ))} */}
        </div>
      </div>
    </section>
  );
}

export default Orders;
