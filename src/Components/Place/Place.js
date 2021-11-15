import "animate.css";
import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./place.css";
const Place = ({ place }) => {
  const { name, desc, img, _id, price } = place;
  return (
    <div>
      <Col className="place-container animate__animated animate__bounce">
        <Card className="card-container">
          <Card.Img variant="top" style={{ height: "300px" }} src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text className="text-start">{desc.slice(0, 200)}</Card.Text>
            <h4 className="text-start">Price: ${price}</h4>
          </Card.Body>
          <div className="d-flex flex-start container mb-2">
            {/* redirect url  */}
            <Link to={`/order/place/tour/${_id}`}>
              <button className="btn btn-warning">
                <i className="fas fa-cart-plus"></i> Book Now
              </button>
            </Link>
          </div>
        </Card>
      </Col>
    </div>
  );
};

export default Place;
