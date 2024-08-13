const { DataTypes } = require('sequelize');
const connection = require('../config/dbconfig');

const User = connection.define('User', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'users' 
});

User.getUserByEmail = async function(email) {
    return await this.findOne({ where: { email } });
};

module.exports = User;
