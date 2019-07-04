import React from "react";
import moment from "moment";

const ProjectSummary = ({ task }) => {
  return (
    <div className="card shadow-sm summary-card p-2 mb-2">
      <div className="card-title text-muted text-capitalize">
        <span className="head-title">{task.title}</span>
        <p className="head-subtitle">
          Posted by: {task.authorFirstName} {task.authorLastName}
        </p>
      </div>
      <div className="card-footer">
        <footer className="blockquote-footer text-info">
          <cite> {moment(task.createdAt.toDate()).calendar()}</cite>
        </footer>
      </div>
    </div>
  );
};

export default ProjectSummary;
