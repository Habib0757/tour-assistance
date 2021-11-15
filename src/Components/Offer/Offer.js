import React from "react";
import "./Offer.css";
const Offer = () => {
  return (
    // offer container
    <div className="offer-container">
      <div
        className="row"
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "500px",
          width: "90%",
        }}
      >
        {/* offer content  */}
        <div className="col-md-6 offer-content ">
          <div>
            <h1>What's New</h1>
            <p>
              Be it first time visitors or seasoned travellers, our calendar is
              packed with activities so that there is always something new to
              discover.
            </p>
            <button className="btn btn-warning text-dark font-weight-bold">
              get this Offer
            </button>
          </div>
        </div>
        {/* offer right side part  */}
        <div className="col-md-6"></div>
      </div>
    </div>
  );
};

export default Offer;
