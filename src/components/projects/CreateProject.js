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
        <div className="container">
          <form className=" white" onSubmit={this.handleSubmit}>
            <h5 className="grey-text text-darken-3">Create New Task</h5>
            <div className="input-field">
              <label htmlFor="title">task</label>
              <input
                id="title"
                value={this.state.task}
                type="text"
                onChange={this.handleOnChange}
              />
            </div>
            <div className="input-field">
              <label htmlFor="content">Content</label>
              <input
                id="content"
                value={this.state.content}
                type="text"
                onChange={this.handleOnChange}
              />
            </div>
            <div className="input-field">
              <button className="btn red lighten-3 z-depth-1">Submit</button>
            </div>
          </form>
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
