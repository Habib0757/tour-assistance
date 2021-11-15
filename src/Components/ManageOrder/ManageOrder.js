import "animate.css";
import React from "react";
import { Card, Col } from "react-bootstrap";
const ManageOrder = ({ order }) => {
  // destracture property from order
  const { _id, tourName, name, email, phone, address, status, img, price } =
    order;
  // delete orders
  const deleteOrder = (id) => {
    // delete Message
    const deleteWarning = window.confirm("are yout sure to delete this one ? ");
    if (deleteWarning) {
      // fetch url
      const url = `http://localhost:5000/orders/${id}`;
      // fetch from API
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            // user interection
            alert("hey this order deleted");
          }
        });
    }
  };
  // update order
  const handleUpdate = (id) => {
    const updateOrder = { ...order };
    updateOrder.status = "approved";
    // fetching url
    const url = `http://localhost:5000/orders/${id}`;
    // fetch from API
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          // user interection
          alert("updated");
          // window.location.reload();
        }
      });
  };

  return (
    <div>
      {/* order container  */}
      <Col className="place-container animate__animated animate__bounce">
        <Card className="card-container">
          {/* order image  */}
          <Card.Img variant="top" style={{ height: "300px" }} src={img} />
          <Card.Body>
            {/* order name  */}
            <Card.Title>{tourName}</Card.Title>
            {/* order details  */}
            <Card.Text className="text-start">
              <h4>Name: {name}</h4>
              <p>email: {email}</p>
              <p>phone: {phone}</p>
              <p>Address: {address}</p>

              <div>
                Status:
                <span
                  style={{
                    background: "#9d3aff",
                    color: "white",
                    borderRadius: "1rem",
                    fontSize: "15px",
                    padding: "5px",
                    margin: "10px",
                  }}
                >
                  {status}
                </span>
              </div>
            </Card.Text>
          </Card.Body>
          <div className="d-flex flex-start container mb-2">
            {/* buttion and some adding section  */}
            {/* delete order  */}
            <button
              className="btn btn-danger m-1"
              onClick={() => deleteOrder(_id)}
            >
              <i className="fas fa-trash-alt"></i> {"  "} delete
            </button>
            {status === "approved" ? (
              ""
            ) : (
              // update order
              <button
                onClick={() => handleUpdate(_id)}
                className="btn btn-success m-1 text-white"
              >
                <i className="fas fa-clipboard-check"></i>
                {"  "} Approve
              </button>
            )}
          </div>
        </Card>
      </Col>
    </div>
  );
};

export default ManageOrder;
