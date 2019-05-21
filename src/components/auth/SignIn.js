import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
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
            Sign In
          </h5>

          <div className="form-group text-center mt-4">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group text-center">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-danger center"
            style={{ width: '50%', marginLeft: '25%' }}
          >
            Login
          </button>
          {authError ? (
            <div className="alert alert-danger text-center mt-3" role="alert">
              {authError}
            </div>
          ) : null}
        </form>
      </div>
    );
  }
}
const mapDispatchtoProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

const mapStatetoProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(SignIn);
