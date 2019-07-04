import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { reactReduxFirebase } from "react-redux-firebase";

const NavMain = props => {
  const { auth } = props;

  const links = auth.uid ? (
    <SignedInLinks profile={props.profile} />
  ) : (
    <SignedOutLinks />
  );
  return (
    <div class="nav-container">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <Link className="logo-beupto px-sm-3 p-md-0" to="/">
            <i className="material-icons">call_made</i>
            BeUpto
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle className="on-expand" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="to-right" id="basic-navbar-nav">
          {links}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

const mapSateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapSateToProps)(NavMain);
