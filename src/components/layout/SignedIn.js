import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedIn = props => {
  return (
    <Fragment>
      <li className="nav-item mx-3">
        <NavLink
          className="nav-link"
          to="/createproject"
          activeStyle={{ fontWeight: '400' }}
        >
          New Project
        </NavLink>
      </li>
      <li className="nav-item mx-3">
        {
          // eslint-disable-next-line
          <a
            className="nav-link"
            onClick={props.signOut}
            style={{ cursor: 'pointer' }}
          >
            Log Out
          </a>
        }
      </li>
      <li className="mx-3">
        <NavLink
          className="nav-link btn btn-danger"
          style={{ borderRadius: '50%' }}
          to="/"
        >
          {props.profile.initials}
        </NavLink>
      </li>
    </Fragment>
  );
};

const mapDispatchtoProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  null,
  mapDispatchtoProps
)(SignedIn);
