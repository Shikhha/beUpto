import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { reactReduxFirebase } from "react-redux-firebase";

class NavMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    };
  }

  handleToggleClick = e => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { auth } = this.props;
    document.body.addEventListener("click", () => {
      if (this.state.expanded === true) {
        this.setState({ expanded: !this.state.expanded });
      }
    });
    const links = auth.uid ? (
      <SignedInLinks profile={this.props.profile} />
    ) : (
      <SignedOutLinks />
    );
    return (
      <div className="nav-container">
        <Navbar
          bg="light"
          expand="lg"
          onToggle={this.handleToggleClick}
          expanded={this.state.expanded}
        >
          <Navbar.Brand>
            <Link className="logo-beupto px-sm-3 p-md-0" to="/">
              <i className="material-icons">call_made</i>
              BeUpto
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            className="on-expand"
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse className="to-right" id="basic-navbar-nav">
            {links}
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapSateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapSateToProps)(NavMain);
