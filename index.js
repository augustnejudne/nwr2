/**
 * Author: Kim Nejudne
 */

// NPM MODULE EXPORTS
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;


// INITIALIZATIONS
const app = express();


// DEV CONFIGURATIONS
require('./config/config')(app);


// SERVICES
require('./services/passport')(passport, GoogleStrategy);


// MIDDLEWARE
// Initialize Passport and restore authentication state, if any, from the session
app.use(passport.initialize());
app.use(passport.session());


// ROUTES
require('./routes/auth.routes')(app);
require('./routes/routes')(app);


// PORT LISTEN
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log('\n#######################################\n');
  console.log(`Listening on PORT: ${PORT}`);
  console.log('\n#######################################\n');
});
