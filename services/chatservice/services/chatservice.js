const WebSocket = require('ws');
const ChatModel = require('../db/models/chatmodel');

const chatService = (server) => {
  const wss = new WebSocket.Server({ server });

  wss.on('connection', (ws) => {
    console.log('Cliente conectado al WebSocket');

    ws.on('message', async (message) => {
      const msgData = JSON.parse(message);
      console.log('Mensaje recibido:', msgData);

      try {
        await ChatModel.create({
          id_user: msgData.id_user,
          texto: msgData.texto,
          timestamp: new Date(),
        });
        console.log('Mensaje guardado en la base de datos');
      } catch (error) {
        console.error('Error al guardar el mensaje en la base de datos:', error);
        ws.send(JSON.stringify({ error: 'Error al guardar el mensaje' }));
      }

      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify(msgData));
        }
      });
    });

    ws.on('close', () => {
      console.log('Cliente desconectado del WebSocket');
    });
  });
};

module.exports = chatService;
