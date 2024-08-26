const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbconfig');

const Document = sequelize.define('Document', {
    id_proyect: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING(500),
        allowNull: false
    }
}, {
    tableName: 'documents',
    timestamps: true, // createdAt y updatedAt se manejan automáticamente
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

module.exports = Document;
