import React from 'react';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

const ProjectDetails = props => {
  const { project, auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />;
  if (project) {
    return (
      <div className="container my-4 project-details">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{project.title} </h5>
            <p className="card-text">{project.content}</p>
          </div>
          <div className="card-footer text-muted">
            <p className="card-text">
              {' '}
              Posted by {project.authorFirstName} {project.authorLastName}{' '}
            </p>
            <p className="card-text">
              <small className="text-muted">
                {moment(project.createdAt.toDate()).format(
                  'MMMM Do YYYY, h:mm a'
                )}
              </small>
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container d-flex justify-content-center">
        <div class="spinner-grow text-secondary mt-5" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-danger mt-5" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-dark mt-5" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
};

const mapStatetoProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStatetoProps),
  firestoreConnect([{ collection: 'projects' }])
)(ProjectDetails);
