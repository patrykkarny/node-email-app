import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const renderContent = (auth) => {
  switch (auth) {
    case null: return 'Loading...';
    case false: return <li><a href="/auth/google">Log in with Google</a></li>;
    default: return <li><a href="/api/logout">Log out</a></li>;
  }
};

const HeaderBase = ({ auth }) => (
  <nav>
    <div className="nav-wrapper">
      <Link
        className="left brand-logo"
        to={auth ? '/surveys' : '/'}
      >
        Logo
      </Link>
      <ul className="right">
        {renderContent(auth)}
      </ul>
    </div>
  </nav>
);

HeaderBase.propTypes = {
  auth: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
};

HeaderBase.defaultProps = {
  auth: null,
}

const mapStateToProps = ({ auth }) => ({ auth });

export const Header = connect(mapStateToProps)(HeaderBase);