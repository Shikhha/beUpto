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
  };
  render() {
    const { auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="container">
        <form className=" white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              value={this.state.email}
              type="email"
              onChange={this.handleOnChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={this.state.password}
              onChange={this.handleOnChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="firstname">First Name</label>
            <input
              id="firstname"
              type="text"
              value={this.state.firstname}
              onChange={this.handleOnChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="lastname">Last Name</label>
            <input
              id="lastname"
              type="text"
              value={this.state.lastname}
              onChange={this.handleOnChange}
            />
          </div>
          <div className="input-field">
            <button className="btn red lighten-3 z-depth-1">Submit</button>
          </div>
        </form>
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
