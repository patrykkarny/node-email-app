import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

import { validateEmails } from 'utils/validateEmails';
import { surveyFormSchema, SURVEY_FORM } from 'consts';

import { SurveyField } from './SurveyField';

const renderedFields = surveyFormSchema.map(({ label, name }) => (
  <Field
    key={name}
    type="text"
    name={name}
    label={label}
    component={SurveyField}
  />
));

const SurveyFormBase = ({ handleSubmit, onSurveySubmit }) => (
  <form noValidate onSubmit={handleSubmit(onSurveySubmit)}>
    {renderedFields}
    <Link
      className="red btn-flat left white-text"
      to="/surveys"
    >
      Cancel
    </Link>
    <button
      className="teal btn-flat right white-text"
      type="submit"
    >
      Next
      <i className="material-icons right">done</i>
    </button>
  </form>
);

SurveyFormBase.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSurveySubmit: PropTypes.func.isRequired,
};

export const SurveyForm = reduxForm({
  validate: (values) => {
    const errors = {};

    errors.recipients = validateEmails(values.recipients);

    surveyFormSchema.forEach(({ name, error }) => {
      if (!values[name]) {
        errors[name] = error;
      }
    });

    return errors;
  },
  form: SURVEY_FORM,
  destroyOnUnmount: false,
})(SurveyFormBase);
