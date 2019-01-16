const passport = require('passport');

module.exports = app => {
  /**
   * login routes for google
   * tells passport to use google strategy
   * tells google it needs email and profile information from user
   */
  app.get(
    '/auth/google',
    passport.authenticate('google', { scope: ['email', 'profile'] })
  );

  /**
   * This is whwere passport takes the user after authentication
   * passport handles the failureRedirect
   * but express ahndles the success redirect
   */
  app.get(
    '/auth/google/callback',
    passport.authenticate('google', {
      failureRedirect: '/'
    }),
    (req, res) => {
      console.log('========================');
      console.log('passport.authenticate req.user');
      console.log(req.user);
      console.log('========================');
      res.redirect('/dashboard');
    }
  );
};
