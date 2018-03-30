const passport = require('passport');
const mongoose = require('mongoose');
const { Strategy } = require('passport-google-oauth20');
const { googleClientID, googleClientSecret } = require('../config/keys');

const User = mongoose.model('users');

passport.use(
  new Strategy(
    {
      clientID: googleClientID,
      clientSecret: googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true,
    },
    // callback with user credentials from google
    async (accessToken, refreshToken, profile, done) => {
      try {
        const existingUser = await User.findOne({ googleId: profile.id });

        if (!existingUser) {
          const user = await new User({ googleId: profile.id }).save();

          return done(null, user);
        }

        return done(null, existingUser);
      } catch (err) {
        return done(err);
      }
    },
  ),
);

// create header Set-Cookie with user id
passport.serializeUser((user, done) => {
  done(null, user.id); // id from mongodb, shorthand for _id
});

// deserialize header Set-Cookie with user id and add user to request object
passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);

  done(null, user);
});
