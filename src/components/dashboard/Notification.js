import React from 'react';
import moment from 'moment';

const Notification = props => {
  const { notifications } = props;
  return (
    <div className="container my-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Notifications</h5>
          <ul className="list-group list-group-flush">
            {notifications &&
              notifications.map(not => {
                return (
                  <li key={not.id} className="list-group-item">
                    {' '}
                    <span className="text-danger">{not.user} </span>
                    <span>{not.content} </span>
                    <div className="text-muted">
                      {moment(not.time.toDate()).fromNow()}{' '}
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notification;
