import React, { Component } from "react";
import { connect } from "react-redux";
import createProject from "../actions/projectActions";
import { Redirect } from "react-router-dom";

class CreateProject extends Component {
  state = {
    title: "",
    content: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch(createProject(this.state));
    this.props.history.push("/dashboard");
  };
  handleOnChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/login" />;
    return (
      <div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <form className="signin-form" onSubmit={this.handleSubmit}>
                <h5 className="signin pb-3">Create New Task</h5>
                <div className="form-group">
                  <label className="text-muted" htmlFor="title">
                    Task
                  </label>
                  <input
                    className="form-control signin-input"
                    id="title"
                    value={this.state.task}
                    type="text"
                    onChange={this.handleOnChange}
                  />
                </div>
                <div className="form-group">
                  <label className="text-muted" htmlFor="content">
                    Content
                  </label>
                  <input
                    className="form-control signin-input"
                    id="content"
                    value={this.state.content}
                    type="text"
                    onChange={this.handleOnChange}
                  />
                </div>

                <button className="btn signin-button ">Submit</button>
              </form>
            </div>
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
export default connect(mapStateToProps)(CreateProject);
