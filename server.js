const { app } = require('./lib/app');

const PORT = process.env.port || 9999;

app.listen(PORT, () => {
  console.log(`Vigilantly listening on port ${PORT}`);
});
