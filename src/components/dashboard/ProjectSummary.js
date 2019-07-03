import React from "react";
import moment from "moment";

const ProjectSummary = ({ task }) => {
  return (
    <div className="card z-depth-1 project white  summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{task.title}</span>
        <p>
          Posted by: {task.authorFirstName} {task.authorLastName}
        </p>

        <p className="grey-text">
          {moment(task.createdAt.toDate()).calendar()}
        </p>
      </div>
    </div>
  );
};

export default ProjectSummary;
