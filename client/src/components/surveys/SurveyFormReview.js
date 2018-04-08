import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';

import * as actions from 'actions';

import { surveyFormSchema, SURVEY_FORM } from 'consts';

const renderFormReview = formValues => surveyFormSchema.map(({ name, label }) => (
  <div key={name}>
    <label htmlFor={label}>{label}</label>
    <div>{formValues[name]}</div>
  </div>
));

export const SurveyFormReviewBase = ({
  onSurveyCancel,
  formValues,
  submitSurvey,
  history,
}) => (
  <Fragment>
    <h5>Please confirm your entires</h5>
    <div>
      {renderFormReview(formValues)}
    </div>
    <button
      className="yellow white-text darken-3 btn-flat"
      onClick={onSurveyCancel}
    >
      Back
    </button>
    <button
      className="green white-text btn-flat right"
      onClick={() => submitSurvey(formValues, history)}
    >
      Send Survey
      <i className="material-icons right">email</i>
    </button>
  </Fragment>
);

SurveyFormReviewBase.propTypes = {
  onSurveyCancel: PropTypes.func.isRequired,
  formValues: PropTypes.object.isRequired, // eslint-disable-line
  submitSurvey: PropTypes.func.isRequired,
  history: ReactRouterPropTypes.history.isRequired, // eslint-disable-line
};

const mapStateToProps = state => ({
  formValues: getFormValues(SURVEY_FORM)(state),
});

export const SurveyFormReview = withRouter(
  connect(mapStateToProps, actions)(SurveyFormReviewBase),
);
