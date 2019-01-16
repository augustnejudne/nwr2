module.exports = app => {
  app.get('/', (req, res) => {
    res.send('Hello world!');
  });

  app.get('/dashboard', (req, res) => {
    res.send('dashboard');
  });
};
