// index.js
const app = require('./server');
const connection = require('./db/config/dbconfig');

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  try {
    await connection.sync(); // Sincroniza el modelo con la base de datos
    console.log(`Server is running on port ${PORT}`);
  } catch (err) {
    console.error('Unable to sync the database:', err);
  }
});
