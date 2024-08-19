const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const sequelize = require('./db/config/dbconfig');
const { listenForMessages } = require('./services/auditservice'); // Importa la función para escuchar los mensajes

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

// Inicia la escucha de mensajes de Pub/Sub
listenForMessages().catch(console.error);

const PORT = process.env.PORT || 3007;
app.listen(PORT, () => {
  console.log(`Audit service running on port ${PORT}`);
});
