import React from 'react';
import { Link } from 'react-router-dom';
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';
import { connect } from 'react-redux';

const Navbar = props => {
  const { auth, profile } = props;
  const links = auth.uid ? <SignedIn profile={profile} /> : <SignedOut />;
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link
            className="navbar-brand"
            to="/"
            style={{
              fontWeight: '600',
              fontSize: '35px'
            }}
          >
            Wedding Planning
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse d-flex flex-row-reverse"
            id="navbarNav"
          >
            <ul className="navbar-nav">{links}</ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

const mapStatetoProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStatetoProps)(Navbar);
