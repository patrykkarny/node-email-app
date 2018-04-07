import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Payments } from './Payments';

const renderContent = (auth) => {
  switch (auth) {
    case null:
      return 'Loading...';

    case false:
      return (
        <li>
          <a href="/auth/google">Log in with Google</a>
        </li>
      );

    default: return (
      <Fragment>
        <li><Payments /></li>
        <li style={{ margin: '0 10px' }}>Credits: {auth.credits}</li>
        <li><a href="/api/logout">Log out</a></li>
      </Fragment>
    );
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
  auth: PropTypes.any, // eslint-disable-line
};

HeaderBase.defaultProps = {
  auth: null,
};

const mapStateToProps = ({ auth }) => ({ auth });

export const Header = connect(mapStateToProps)(HeaderBase);
