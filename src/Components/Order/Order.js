import "animate.css";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import useAuth from "../Hooks/useAuth";
import "./Order.css";
const Order = () => {
  const history = useHistory();
  const { register, handleSubmit, reset } = useForm();
  const { id } = useParams();
  const { user } = useAuth();
  const [place, setPlace] = useState([]);
 
  const url = `https://boiling-temple-03505.herokuapp.com/places/${id}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPlace(data));
  }, [url]);
  const onSubmit = (data) => {
    // push some data
    data.tourName = place.name;
    data.status = "pending";
    data.img = place.img;
    data.desc = place.desc;
    // fetch from api
    fetch("https://boiling-temple-03505.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        // user interestion

        if (data.insertedId) {
          alert("we are collected your tour plan, please wait for approval");
          // reset form
          reset();
          // redirect user
          history.push("/myOrders");
        }
      });
  };
  return (
    <div className="container order-container animate__bounce">
      <div>
        <div className="row information-and__order_container">
          <div className="col-md-6 order-info-container">
            <div className="info-main-container">
              <div>
                <img src={place.img} className="img-fluid w-75" alt="" />
                <h4>{place.name}</h4>
                <p>
                  {place.desc?.slice(0, 400)}
                  {" ..............."}
                </p>
                {place.price && <h4>Price: ${place.price}</h4>}
              </div>
            </div>
          </div>
          <div className="col-md-6 place-order-container">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1>Order {place.name}</h1>
              <input
                {...register("tourName")}
                required
                placeholder="tour name"
                defaultValue={place.name || ""}
                readOnly
              />
              <input
                {...register("name")}
                required
                placeholder="your name"
                defaultValue={user.displayName}
                readOnly
              />
              <input
                {...register("email")}
                required
                placeholder="your email"
                defaultValue={user.email}
              />
              <input
                {...register("phone")}
                required
                placeholder="your phone number"
              />
              <input
                {...register("address")}
                required
                placeholder="your parmanent address"
              />
              <input type="submit" value="place order" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
