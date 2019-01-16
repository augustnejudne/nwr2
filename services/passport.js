module.exports = (passport, GoogleStrategy) => {
  // PASSPORT CONFIGURATIONS
  /**
   * passport.use()
   * Tells passport to use GoogleStrategy()
   * GoogleStrategy() takes two arguments
   *   1. an object with clientID, clientSecret, and callbackURL
   *   2. a callback function that gives the ff: accessToken, refreshToken, profile, and callback
   * The callback is a verify callback, according to Passport.js docs
   * The purpose of a verify callback is to find the user that possesses a set of credentials
   */
  passport.use(
    new GoogleStrategy(
      {
        // This is the client ID console.developers.google Google+ API Oauth provides
        clientID: process.env.GOOGLE_OAUTH_CLIENT_ID,
        // This is the client secret console.developers.google Google+ API Oauth provides
        clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
        // This is the route passport is going to take the user after authentication
        callbackURL: '/auth/google/callback'
      },
      (accessToken, refreshToken, profile, callback) => {
        console.log('========================');
        console.log('profile');
        console.log(profile);
        console.log('========================');
        callback(null, profile);
      }
    )
  );
  /**
   *  Configure Passport authenticated session persistence.
   * In order to restore authentication state across HTTP requests, Passport needs
   * to serialize users into and deserialize users out of the session.  In a
   * production-quality application, this would typically be as simple as
   * supplying the user ID when serializing, and querying the user record by ID
   * from the database when deserializing.  However, due to the fact that this
   * example does not have a database, the complete Facebook profile is serialized
   * and deserialized.
   */
  passport.serializeUser(function(user, cb) {
    console.log('========================');
    console.log('serializeUser, user');
    console.log(user);
    console.log('========================');
    cb(null, user);
  });

  passport.deserializeUser(function(obj, cb) {
    console.log('========================');
    console.log('deserializeUser, user');
    console.log(obj);
    console.log('========================');
    cb(null, obj);
  });
};
