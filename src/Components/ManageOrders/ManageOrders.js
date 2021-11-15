import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import ManageOrder from "../ManageOrder/ManageOrder";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    // fetching data from API
    fetch("https://boiling-temple-03505.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);

  return (
    <div style={{ minHeight: "100vh" }}>
      <h1 className="mt-5">manage orders {orders.length}</h1>
      {/* maping orders  */}
      <Row xs={1} md={3} className="g-4 container mx-auto">
        {orders.map((order) => (
          <ManageOrder key={order._id} order={order}></ManageOrder>
        ))}
      </Row>
    </div>
  );
};

export default ManageOrders;
