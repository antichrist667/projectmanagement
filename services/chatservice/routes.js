const express = require('express');
const chatService = require('./services/chatservice'); 
const router = express.Router();

router.get('/chats', async (req, res) => {
  try {
    const chats = await chatService.getAllChats();
    res.json(chats);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los chats' });
  }
});

router.get('/chats/:id_user', async (req, res) => {
  const { id_user } = req.params;
  try {
    const chats = await chatService.getChatsByUserId(id_user);
    res.json(chats);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el chat del usuario' });
  }
});

module.exports = router;
