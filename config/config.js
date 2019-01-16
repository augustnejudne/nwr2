module.exports = app => {
  if (app.get('env') !== 'production') {
    require('dotenv').config();
  }
};
