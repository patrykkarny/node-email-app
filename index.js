const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const { mongoURI, cookieKey } = require('./config/keys');

require('./models/User');
require('./services/passport');

mongoose.connect(mongoURI);

const app = express();

app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [cookieKey],
}));

// methods to initialize passport helper functions and user data on request object
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

app.listen(process.env.PORT || 5000, () =>
  console.log('Listen on port 5000'),
);
