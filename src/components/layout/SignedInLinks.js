import React from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../actions/authActions";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import "../../styles/style.css";

const SignedInLinks = props => {
  return (
    <Nav className="ml-auto">
      <Nav.Link className=" anchor-link nav-link mt-2 ml-2">
        <Link className="text-white text-capitalize" to="/dashboard">
          Dashboard&nbsp;
        </Link>
      </Nav.Link>
      <Nav.Link className="  anchor-link nav-link mt-2 ml-2">
        {" "}
        <Link className="text-white text-capitalize" to="/create">
          New Task
        </Link>
      </Nav.Link>
      <Nav.Link className=" anchor-link nav-link mt-2 ml-2">
        {" "}
        <Link className="text-white text-capitalize" to="/login">
          <a className="" href="" onClick={props.signOut}>
            Log Out
          </a>
        </Link>
      </Nav.Link>
      <Nav.Link className="nav-link ml-2 ">
        <div className="btn btn-floating">{props.profile.initials}</div>
      </Nav.Link>
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
