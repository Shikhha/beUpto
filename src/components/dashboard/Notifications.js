import React from "react";
import moment from "moment";

const Notifications = props => {
  const { notifications } = props;
  return (
    <div className="card shadow-sm not-card rounded pl-4 mb-2">
      <span className="card-title note-title text-muted text-capitalize">
        Notifications
      </span>
      <div className="card-body">
        <ul>
          {notifications &&
            notifications.map(note => {
              return (
                <li className="mb-1" key={note.id}>
                  <span className="user">{note.user}</span>{" "}
                  <span>{note.content}</span>
                  <div className="grey-text note-date">
                    {moment(note.time.toDate()).fromNow()}
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Notifications;
