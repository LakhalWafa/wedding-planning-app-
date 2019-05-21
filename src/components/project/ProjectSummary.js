import React from 'react';
import moment from 'moment';

const ProjectSummary = ({ project }) => {
  return (
    <div className="card mb-2">
      <div className="card-body">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text">
          Posted by {project.authorFirstName} {project.authorLastName}
        </p>
        <p className="card-text">
          <small className="text-muted">
            {' '}
            {moment(project.createdAt.toDate()).format('MMMM Do YYYY, h:mm a')}
          </small>
        </p>
      </div>
    </div>
  );
};

export default ProjectSummary;
