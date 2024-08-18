const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.AUDIT_MYSQL_DBNAME,
  process.env.AUDIT_MYSQL_USER,
  process.env.AUDIT_MYSQL_PASSWORD,
  {
    host: process.env.AUDIT_MYSQL_HOST,
    dialect: 'mysql'
  }
);

module.exports = sequelize;
