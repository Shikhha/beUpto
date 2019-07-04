import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, NavItem } from "react-bootstrap";

const SignedOutLinks = () => {
  return (
    <Nav className="ml-auto">
      <NavItem className="anchor-link nav-link mt-2 ml-2">
        <NavLink className="text-white text-capitalize" to="/login">
          Login
        </NavLink>
      </NavItem>
      <NavItem className="  anchor-link nav-link mt-2 ml-2">
        {" "}
        <NavLink className="text-white text-capitalize" to="/signup">
          Sign Up
        </NavLink>
      </NavItem>
    </Nav>
  );
};
export default SignedOutLinks;
