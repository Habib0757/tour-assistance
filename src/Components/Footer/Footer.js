import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      {/* footer part  */}
      <footer
        className="mt-5 p-4 pb-2 bg-dark text-white "
        // style={{ background: "#014c6e", color: "white" }}
      >
        {/* logo with some information part  */}
        <div className="row align-items-center">
          <div className="col-md-3">
            <h1 as={Link} to="/">
              Tour Assitance
            </h1>
          </div>
          {/* some importanr links part */}

          <div className="col-md-3 text-start ">
            <ul>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/add/place">Add place</Link>
              </li>
              <li>
                <Link to="/myOrders">My orders</Link>
              </li>
              <li>
                <Link to="/admin/manage/order">Manage Orders</Link>
              </li>
            </ul>
          </div>
          {/* about this website part  */}
          <div className="col-md-3 text-white">
            <p className="text-start mt-4">
              MALAYSIA TOURISM PROMOTION BOARD (MTPB) HEAD OFFICE
            </p>
            <p className="mb-3">
              <small>
                9th Floor, No. 2, Tower 1, Jalan P5/6, Presint 5, 62200,
                Putrajaya, Malaysia
              </small>
            </p>
          </div>
        </div>
        {/* copyright section  */}
        <p className='mt-5'>All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
