
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.SUGGESTION_MYSQL_DBNAME,
    process.env.SUGGESTION_MYSQL_USER,
    process.env.SUGGESTION_MYSQL_PASSWORD,
    {
        host: process.env.SUGGESTION_MYSQL_HOST,
        dialect: 'mysql'
    }
);

sequelize.authenticate()
    .then(() => {
        console.log('Connection to MySQL has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;
