import React from "react";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";

const ProjectList = props => {
  return (
    <div>
      {props.tasks &&
        props.tasks.map(task => {
          return (
            <Link to={"/detail/" + task.id} className="non-list" key={task.id}>
              <ProjectSummary task={task} />
            </Link>
          );
        })}
    </div>
  );
};

export default ProjectList;
