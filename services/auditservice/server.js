const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const sequelize = require('./db/config/dbconfig');

const app = express();

app.use(cors());

app.use(express.json());
app.use('/api', routes);

sequelize.sync()
  .then(() => {
    console.log('Audit Logs table has been synchronized');
  })
  .catch((err) => {
    console.error('Unable to sync the database:', err);
  });

const PORT = process.env.PORT || 3007;
app.listen(PORT, () => {
  console.log(`Audit service running on port ${PORT}`);
});
