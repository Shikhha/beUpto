import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

const SignedOutLinks = () => {
  return (
    <Nav className="ml-auto">
      <Nav.Link className="anchor-link nav-link mt-2 ml-2">
        <NavLink className="text-white text-capitalize" to="/login">
          Login
        </NavLink>
      </Nav.Link>
      <Nav.Link className="  anchor-link nav-link mt-2 ml-2">
        {" "}
        <NavLink className="text-white text-capitalize" to="/signup">
          Sign Up
        </NavLink>
      </Nav.Link>
    </Nav>
  );
};
export default SignedOutLinks;
