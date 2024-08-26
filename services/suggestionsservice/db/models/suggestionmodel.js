
const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbconfig');

const Suggestion = sequelize.define('Suggestion', {
    suggestion_text: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    }
}, {
    tableName: 'suggestions',
    timestamps: true
});

module.exports = Suggestion;
