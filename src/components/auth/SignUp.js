import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../actions/authActions";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstname: "",
    lastname: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch(signUp(this.state));
  };
  handleOnChange = e => {
    this.setState({ [e.target.id]: e.target.value });
    if (e.target.id === "password") {
      this.handleOnPasswordChange(e.target.value);
    }
  };
  handleOnPasswordChange = pwd => {};
  render() {
    const { auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto">
            <form className="signin-form" onSubmit={this.handleSubmit}>
              <h5 className="signin pb-3">Sign Up</h5>
              <div className="form-group">
                <label className="text-muted" htmlFor="email">
                  Email
                </label>
                <input
                  className="form-control form-control-sm signin-input"
                  id="email"
                  value={this.state.email}
                  type="email"
                  onChange={this.handleOnChange}
                />
              </div>
              <div className="form-group">
                <label className="text-muted" htmlFor="password">
                  Password
                </label>
                <input
                  className="form-control form-control-sm signin-input"
                  id="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.handleOnChange}
                />
                <small id="passwordHelpBlock" class="form-text text-muted">
                  Your password must be 8 characters long and must not contain
                  spaces, special characters, or emoji.
                </small>
              </div>
              <div className="form-group">
                <label className="text-muted" htmlFor="firstname">
                  First Name
                </label>
                <input
                  className="form-control form-control-sm signin-input"
                  id="firstname"
                  type="text"
                  value={this.state.firstname}
                  onChange={this.handleOnChange}
                />
              </div>
              <div className="form-group">
                <label className="text-muted" htmlFor="lastname">
                  Last Name
                </label>
                <input
                  className="form-control form-control-sm signin-input"
                  id="lastname"
                  type="text"
                  value={this.state.lastname}
                  onChange={this.handleOnChange}
                />
              </div>

              <button type="submit" className="btn signin-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(SignUp);
