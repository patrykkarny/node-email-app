const { redirectDomain } = require('../config/keys');

module.exports = ({ body }) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
    <title>Document</title>
  </head>
  <body>
    <div style="text-align: center;">
      <h3>I'd like your input!</h3>
      <p>Please answer the following question:</p>
      <p>${body}</p>
      <div style="text-align: center;">
        <a href="${redirectDomain}/api/surveys/confirmation">Yes</a>
        <a href="${redirectDomain}/api/surveys/confirmation" style="margin-left: 20px;">No</a>
      </div>
    </div>
  </body>
  </html>
`;
