const mongoose = require('mongoose');
const Path = require('path-parser').default;
const { URL } = require('url');
const { isEqual } = require('lodash');

const Mailer = require('../services/Mailer');
const surveyTemplate = require('../templates/surveyTemplate');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

const Survey = mongoose.model('surveys');

module.exports = (app) => {
  app.get('/api/surveys/:surveyId/:choice', (req, res) => {
    res.send('Thank you for your feedback!');
  });

  app.post('/api/surveys/webhooks', (req, res) => {
    const path = new Path('/api/surveys/:surveyId/:choice');

    req.body
      .reduce((total, { url, email }) => {
        const { pathname } = new URL(url);
        const match = path.test(pathname);

        if (match) {
          const { choice, surveyId } = match;
          const event = { choice, email, surveyId };
          const isExist = total.find(e => isEqual(e, surveyId));

          if (!isExist) {
            total = [...total, event]; // eslint-disable-line
          }
        }

        return total;
      }, [])
      .forEach(({ email, choice, surveyId }) => {
        Survey.updateOne({
          _id: surveyId,
          recipients: {
            $elemMatch: { email, responded: false },
          },
        }, {
          $inc: { [choice]: 1 },
          $set: { 'recipients.$.responded': true },
          lastResponded: new Date(),
        }).exec();
      });

    res.send({});
  });

  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
    const {
      title,
      subject,
      body,
      recipients,
    } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now(),
    });

    const mailer = new Mailer(survey, surveyTemplate(survey));

    try {
      await mailer.send();
      await survey.save();

      req.user.credits -= 1;

      const user = await req.user.save();

      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
