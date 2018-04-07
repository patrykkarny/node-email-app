export const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const surveyFormSchema = [
  { label: 'Survey Title', name: 'title', error: 'You must provide a title' },
  { label: 'Subject Line', name: 'subject', error: 'You must provide a subject' },
  { label: 'Email body', name: 'body', error: 'You must provide a body' },
  { label: 'Recipients list', name: 'emails', error: 'You must provide an emails' },
];
