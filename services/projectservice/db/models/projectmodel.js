const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbconfig');

const Project = sequelize.define('Project', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    start_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'projects',
    timestamps: false // Desactiva las columnas createdAt y updatedAt
});

module.exports = Project;
