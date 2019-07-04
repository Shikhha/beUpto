import React from "react";
import "../../styles/style.css";

const Welcome = () => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-10 col-md-10 mx-auto">
          <div className="welcome">
            <i className="material-icons customize">call_made</i>
            <div className="heading-primary">
              <div className="heading-primary-main">BeUpto</div>
              <div className="heading-primary-sub">
                is where you manage teams better
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
