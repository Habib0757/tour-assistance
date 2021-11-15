import React from "react";
import { Spinner } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import useAuth from "../Hooks/useAuth";
import "./login.css";

const Login = () => {
  const { googleSignIn, user, isLoading } = useAuth();
  const history = useHistory();
  const location = useLocation();
  if (isLoading) {
    return <Spinner className="mt-5" animation="grow" />;
  }
  return (
    <div
      style={{ height: "90vh" }}
      className="d-flex align-items-center login-container"
    >
      <div className="login-method">
        {/* condition  */}
        {user.email ? (
          // components
          location.state?.from === undefined ? (
            history.push("/")
          ) : (
            history.push(`${location.state?.from?.pathname}`)
          )
        ) : (
          <div>
            <h1>login user</h1>
            {/* login button  */}
            <button onClick={googleSignIn}>
              {" "}
              <i className="fab fa-google text-dark"></i> {"  "}google sign in
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
