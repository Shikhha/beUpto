import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import moment from "moment";

const ProjectDetails = props => {
  const { task, auth } = props;
  if (!auth.uid) return <Redirect to="/login" />;
  if (task) {
    return (
      <div className="container section project-details  ">
        <div className="card cyan lighten-5 z-depth-2">
          <div className="card-content">
            <span className="card-title text-darken-3">{task.title}</span>
            <p>{task.content}</p>
          </div>
          <div className="card-action gret lighten-4 grey-text">
            <div>
              Posted by : {task.authorFirstName} {task.authorLastName}{" "}
            </div>
            <div>On: {moment(task.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div class="container center">
        <p>Loading...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const tasks = state.firestore.data.projects;
  const task = tasks ? tasks[id] : null;
  return {
    task: task,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
