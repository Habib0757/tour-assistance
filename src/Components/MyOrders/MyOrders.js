import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import useAuth from "../Hooks/useAuth";
import MyOrder from "../MyOrder/MyOrder";

const MyOrders = () => {
  const { user } = useAuth();
  // fetching url
  const url = `http://localhost:5000/orders/${user.email}`;
  const [orders, setOrders] = useState([]);
  // fetching api method
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [url]);

  return (
    <div style={{ minHeight: "100vh" }}>
      {orders.length > 0 ? (
        <h1>You are Planning to visit {orders.length} Places</h1>
      ) : (
        <h1>Sorry, You Do Not Have Any Plan To Visit Anywhare Yet !</h1>
      )}
      {/* mapping my orders  */}
      <Row xs={1} md={3} className="g-4 container mx-auto">
        {orders.map((order) => (
          <MyOrder
            key={order._id}
            order={order}
            setOrders={setOrders}
          ></MyOrder>
        ))}
      </Row>
    </div>
  );
};

export default MyOrders;
