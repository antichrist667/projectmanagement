const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.PROJECT_MYSQL_DBNAME,
    process.env.PROJECT_MYSQL_USER,
    process.env.PROJECT_MYSQL_PASSWORD,
    {
        host: process.env.PROJECT_MYSQL_HOST,
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
