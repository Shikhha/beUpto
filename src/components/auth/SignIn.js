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
      <div className="container  mt-5">
        <div className="row">
          <div className=" col-10 mx-auto">
            <form className=" signin-form" onSubmit={this.handleSubmit}>
              <h5 className="signin pb-3">Sign In</h5>
              <div className="form-group">
                <label className="text-muted" htmlFor="email">
                  Email
                </label>
                <input
                  className="form-control signin-input"
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
                  className="form-control signin-input"
                  id="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.handleOnChange}
                />
              </div>

              <button className="btn signin-button">Submit</button>
              <div className="text-center text-danger">
                {error ? <p>{error}</p> : null}
              </div>
            </form>
          </div>
        </div>
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
