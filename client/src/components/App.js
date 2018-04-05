import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from 'actions';

import { Header } from './Header';
import { Landing } from './Landing';

const Dashboard = () => <h1>Dashboard</h1>;
const SurveyNew = () => <h1>SurveyNew</h1>;

class AppBase extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Fragment>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

AppBase.propTypes = {
  fetchUser: PropTypes.func.isRequired,
};

export const App = connect(null, actions)(AppBase);
