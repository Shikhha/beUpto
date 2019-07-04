import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../actions/authActions";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    pwdColor: "text-muted",
    error: "",
    required: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    const { email, password, firstname, lastname, pwdColor } = this.state;
    if (
      pwdColor === "text-danger" ||
      password === "" ||
      firstname === "" ||
      lastname === "" ||
      email === ""
    ) {
      this.setState({
        error: "**signing up failed. Check the required fields**"
      });
      this.setState({ required: "*" });
    } else {
      this.props.dispatch(signUp(this.state));
      this.setState({ error: "" });
      this.setState({ required: "" });
    }
  };
  handleOnChange = e => {
    this.setState({ [e.target.id]: e.target.value });
    if (e.target.id === "password") {
      this.handleOnPasswordChange(e.target.value);
    }
  };
  handleOnPasswordChange = pwd => {
    var mediumRegex = new RegExp("^(?=.*[0-9])(?=.{5,})");
    if (mediumRegex.test(pwd)) {
      this.setState({ pwdColor: "text-muted" });
    } else {
      this.setState({ pwdColor: "text-danger" });
    }
  };
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
                  <span className="text-danger">{this.state.required}</span>
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
                <small
                  id="passwordHelpBlock"
                  className={"form-text " + this.state.pwdColor}
                >
                  Your password must be 6 characters long and contain atleast
                  one numeric character
                </small>
              </div>
              <div className="form-group">
                <label className="text-muted" htmlFor="firstname">
                  First Name
                  <span className="text-danger">{this.state.required}</span>
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
                  <span className="text-danger">{this.state.required}</span>
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
              <span className="text-center p-3 d-sm-block d-md-inline text-danger">
                {this.props.authError ? (
                  <span className="text-danger">*{this.props.authError}*</span>
                ) : null}
              </span>
              <span className="text-center p-3 text-danger">
                {this.state.error ? <span>{this.state.error}</span> : null}
              </span>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

export default connect(mapStateToProps)(SignUp);
