import React from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../actions/authActions";
import { Navbar, NavDropdown, NavItem, Nav } from "react-bootstrap";
import "../../styles/style.css";

const SignedInLinks = props => {
  return (
    <Nav className="ml-auto">
      <NavItem className=" anchor-link nav-link mt-3 ml-2">
        <Link className="text-white text-capitalize" to="/dashboard">
          Dashboard&nbsp;
        </Link>
      </NavItem>
      <NavItem className="  anchor-link nav-link mt-3 ml-2">
        {" "}
        <Link className="text-white text-capitalize" to="/create">
          New Task
        </Link>
      </NavItem>
      <NavItem className=" anchor-link nav-link mt-3 ml-2">
        {" "}
        <NavLink
          onClick={props.signOut}
          className="text-white text-capitalize"
          to="/login"
        >
          log out
        </NavLink>
      </NavItem>
      <NavItem className="nav-link ml-2 ">
        <div className="btn-floating">{props.profile.initials}</div>
      </NavItem>
    </Nav>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};
export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks);
