import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../actions/authActions";
import { Redirect } from "react-router-dom";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch(signIn(this.state));
  };
  handleOnChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  render() {
    const { error, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="container">
        <form className=" white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign In</h5>
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
            <button className="btn red lighten-3 z-depth-1">Submit</button>
            <div className="red-text center">
              {error ? <p>{error}</p> : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    error: state.auth.authError,
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(SignIn);
