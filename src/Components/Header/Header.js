import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import "./Header.css";

const Header = () => {
  // collect authentication data
  const { user, logOut } = useAuth();
  const name = user.displayName;
  return (
    <div className="navBar__container">
      {/* navigation bar  */}
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ background: "#014c6e" }}
        variant="dark"
      >
        <Container>
          {/* navbar left section */}
          <Navbar.Brand as={Link} to="/" className="navbar-brand">
            <div>TourAssistance</div>
            <p><small>Experience~Explore~Plan</small></p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="/">Home</Link>
              <Link to="/services">Services</Link>
              {user.email && <Link to="/add/place">Add new service </Link>}
              {user.email && <Link to="/myOrders"> My Plan</Link>}
              {user.email && (
                <Link to="/admin/manage/order">Manage All Orders</Link>
              )}
            </Nav>
            {/* navbar right part  */}
            {!user.email && (
              <Nav>
                <Link to="/login">
                  <i className="fas fa-sign-in-alt"></i> login
                </Link>
              </Nav>
            )}
            {user.email && (
              <Nav>
                <Link to="/">{name}</Link>
                <button onClick={logOut} className="btn btn-danger">
                  <i className="fas fa-sign-out-alt"></i>
                  {"  "} logout
                </button>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
