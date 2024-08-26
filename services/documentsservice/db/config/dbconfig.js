const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DOCUMENTS_MYSQL_DBNAME,
    process.env.DOCUMENTS_MYSQL_USER,
    process.env.DOCUMENTS_MYSQL_PASSWORD,
    {
        host: process.env.DOCUMENTS_MYSQL_HOST,
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
