import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from 'actions';

import { Header } from './Header';
import { Landing } from './Landing';
import { Dashboard } from './Dashboard';
import { SurveyNew } from './surveys/SurveyNew';

class AppBase extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Header />
          <div className="container">
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </Fragment>
      </BrowserRouter>
    );
  }
}

AppBase.propTypes = {
  fetchUser: PropTypes.func.isRequired,
};

export const App = connect(null, actions)(AppBase);
