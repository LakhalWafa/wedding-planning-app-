import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/actions/authActions';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstname: '',
    lastname: ''
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    const { auth } = this.props;
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
          className=" mt-5 mb-5"
          onSubmit={this.handleSubmit}
          style={{
            boxShadow: '5px 10px 18px #888888',
            padding: '100px',
            border: '1px solid grey',
            backgroundColor: 'white'
          }}
        >
          <h5
            className="text-center font-weight-bold text-danger"
            style={{ fontSize: '30px' }}
          >
            Sign Up
          </h5>
          <div className="row mt-5">
            <div className="col">
              <div className="form-group text-center">
                <label htmlFor="firstname">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstname"
                  placeholder="Enter your first name"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group text-center mt-5">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group text-center">
                <label htmlFor="lastname">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastname"
                  placeholder="Enter your last name"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group text-center mt-5">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-danger mt-5"
            style={{ width: '50%', marginLeft: '25%' }}
          >
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
