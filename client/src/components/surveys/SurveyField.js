import React from 'react';
import PropTypes from 'prop-types';
import { fieldPropTypes } from 'redux-form';

export const SurveyField = ({ input, label, meta: { touched, error } }) => (
  <div>
    <label htmlFor={label}>{label}</label>
    <input {...input} type="text" style={{ marginBottom: '5px' }}/>
    {touched && error && (
      <div
        className="red-text"
        style={{ marginBottom: '20px' }}
      >
        {error}
      </div>
    )}
  </div>
);

SurveyField.propTypes = {
  ...fieldPropTypes,
  label: PropTypes.string.isRequired,
};
