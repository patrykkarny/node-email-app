const passport = require('passport');
const { Strategy } = require('passport-google-oauth20');
const { googleClientID, googleClientSecret } = require('../config/keys');

passport.use(
  new Strategy(
    {
      clientID: googleClientID,
      clientSecret: googleClientSecret,
      callbackURL: '/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('accessToken', accessToken);
      console.log('refreshToken', refreshToken);
      console.log('profile', profile);
    },
  ),
);
