import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';
import { Redirect } from 'react-router-dom';

class CreateProject extends Component {
  state = {
    title: '',
    content: ''
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createProject(this.state);
    this.props.history.push('/');
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="container">
        <form
          className=" mt-5"
          onSubmit={this.handleSubmit}
          style={{
            boxShadow: '5px 10px 18px #888888',
            padding: '70px',
            border: '1px solid grey',
            backgroundColor: 'white'
          }}
        >
          <h5
            className="text-center font-weight-bold text-danger"
            style={{ fontSize: '30px' }}
          >
            Create New Project
          </h5>

          <div className="form-group mt-4">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Enter the project title"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">Project Content</label>
            <textarea
              className="form-control"
              id="content"
              rows="4"
              onChange={this.handleChange}
              placeholder="Enter the project content"
            />
          </div>
          <button
            type="submit"
            className="btn btn-danger center"
            style={{ width: '10%', marginLeft: '45%' }}
          >
            Create
          </button>
        </form>
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  };
};

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(CreateProject);
