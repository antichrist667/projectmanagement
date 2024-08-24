const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dbconfig');

const ChatModel = sequelize.define('ChatModel', {
  id_user: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  texto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  timestamp: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  timestamps: false,
  tableName: 'chats'
});

module.exports = ChatModel;
