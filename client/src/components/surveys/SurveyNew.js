import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import { SURVEY_FORM } from 'consts';

import { SurveyForm } from './SurveyForm';
import { SurveyFormReview } from './SurveyFormReview';

export class SurveyNewBase extends Component {
  state = {
    showFormReview: false,
  };

  handleSurveySubmit = () => this.setState({ showFormReview: true });

  handleSurveyCancel = () => this.setState({ showFormReview: false });

  render() {
    const { showFormReview } = this.state;

    return (
      showFormReview
        ? <SurveyFormReview onSurveyCancel={this.handleSurveyCancel} />
        : <SurveyForm onSurveySubmit={this.handleSurveySubmit} />
    );
  }
}

export const SurveyNew = reduxForm({
  form: SURVEY_FORM,
})(SurveyNewBase);
