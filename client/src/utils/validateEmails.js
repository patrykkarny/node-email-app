import { EMAIL_REGEX } from 'consts';

export const validateEmails = (emails = '') => {
  const emailsArray = emails
    .split(',')
    .reduce((invalidEmails, email) => {
      const trimmedEmail = email.trim();

      if (trimmedEmail && !EMAIL_REGEX.test(trimmedEmail)) {
        invalidEmails = [...invalidEmails, trimmedEmail]; // eslint-disable-line
      }

      return invalidEmails;
    }, []);

  return !!emailsArray.length && `These email are invalid: ${emailsArray}`;
};
