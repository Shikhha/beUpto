import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

const Navbar = props => {
  const { auth } = props;

  const links = auth.uid ? (
    <SignedInLinks profile={props.profile} />
  ) : (
    <SignedOutLinks />
  );
  return (
    <nav className="navbar teal lighten-3">
      <div className="brand-logo">
        <Link to="/">BeUpto</Link>
        <i className="material-icons">call_made</i>
      </div>
      {links}
    </nav>
  );
};

const mapSateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapSateToProps)(Navbar);
