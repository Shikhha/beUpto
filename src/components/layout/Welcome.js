import React from "react";
import "../../styles/style.css";

const Welcome = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="logo-box">
          <i className="material-icons customize">call_made</i>
        </div>
        <div className="heading-primary">
          <div className="heading-primary-main">BeUpto</div>
          <div className="heading-primary-sub">
            is where you manage teams better
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
