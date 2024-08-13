
const { Sequelize } = require('sequelize');


require('dotenv').config();

const connection = new Sequelize(
  process.env.USER_MYSQL_DBNAME,      
  process.env.USER_MYSQL_USER,         
  process.env.USER_MYSQL_PASSWORD,     
  {
    host: process.env.USER_MYSQL_HOST, 
    dialect: 'mysql'
  }
);

connection.authenticate()
  .then(() => console.log('Connection to MySQL has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));

module.exports = connection;
