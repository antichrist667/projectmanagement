// db/config/dbconfig.js
const { Sequelize } = require('sequelize');

// Cargar las variables de entorno desde el archivo .env
require('dotenv').config();

const connection = new Sequelize(
  process.env.USER_MYSQL_DBNAME,       // Nombre de la base de datos
  process.env.USER_MYSQL_USER,         // Usuario de la base de datos
  process.env.USER_MYSQL_PASSWORD,     // Contraseña de la base de datos
  {
    host: process.env.USER_MYSQL_HOST, // Host de la base de datos
    dialect: 'mysql'
  }
);

connection.authenticate()
  .then(() => console.log('Connection to MySQL has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));

module.exports = connection;
