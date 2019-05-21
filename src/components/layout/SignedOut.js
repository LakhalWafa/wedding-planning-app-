import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const SignedOut = () => {
  return (
    <Fragment>
      <li className="nav-item mx-3">
        <NavLink
          className="nav-link"
          to="/signup"
          activeStyle={{ fontWeight: '400' }}
        >
          Signup
        </NavLink>
      </li>
      <li className="nav-item mx-3">
        <NavLink
          className="nav-link"
          to="/signin"
          activeStyle={{ fontWeight: '400' }}
        >
          Login
        </NavLink>
      </li>
    </Fragment>
  );
};

export default SignedOut;
