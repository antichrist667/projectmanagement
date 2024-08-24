const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.CHAT_MYSQL_DBNAME,
  process.env.CHAT_MYSQL_USER,
  process.env.CHAT_MYSQL_PASSWORD,
  {
    host: process.env.CHAT_MYSQL_HOST,
    dialect: 'mysql',
    logging: false, // Desactiva los logs de las consultas SQL
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión establecida con la base de datos.');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
};

module.exports = { sequelize, connectDB };
