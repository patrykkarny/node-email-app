export const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export const SURVEY_FORM = 'surveyForm';

export const surveyFormSchema = [
  { label: 'Survey Title', name: 'title', error: 'You must provide a title' },
  { label: 'Subject Line', name: 'subject', error: 'You must provide a subject' },
  { label: 'Email body', name: 'body', error: 'You must provide a body' },
  { label: 'Recipients list', name: 'recipients', error: 'You must provide an emails' },
];
