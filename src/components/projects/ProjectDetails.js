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
      <div className="container mt-5 p-2">
        <div className="card shadow-sm rounded p-2 mb-2">
          <div className="card-title text-muted text-capitalize">
            <span className="head-title" style={{ fontSize: "30px" }}>
              {task.title}
            </span>
            <p style={{ fontSize: "20px" }}>{task.content}</p>
          </div>
          <div className="card-body">
            <div className="card-footer">
              <footer className="blockquote-footer text-info">
                <cite>
                  <div>
                    Posted by : {task.authorFirstName} {task.authorLastName}{" "}
                  </div>
                  <div>On: {moment(task.createdAt.toDate()).calendar()}</div>
                </cite>
              </footer>
            </div>
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
