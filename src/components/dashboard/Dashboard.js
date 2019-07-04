import React from "react";
import Notifications from "./Notifications";
import ProjectList from "./ProjectList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Dashboard extends React.Component {
  render() {
    const { tasks, auth, notifications } = this.props;

    if (!auth.uid) return <Redirect to="/login" />;
    return (
      <div className="container mx-auto my-5" style={{ height: "100vh" }}>
        <div className="row ">
          <div className="col-12 col-md-5 mx-auto">
            <ProjectList tasks={tasks} />
          </div>
          <div className="col-12 col-md-5 mx-auto">
            <Notifications notifications={notifications} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    tasks: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notification
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "projects", orderBy: ["createdAt", "desc"] },
    { collection: "notification", limit: 3, orderBy: ["time", "desc"] }
  ])
)(Dashboard);
