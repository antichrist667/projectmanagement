const express = require('express');
const http = require('http');
const cors = require('cors'); 
require('dotenv').config();
const { connectDB } = require('./db/config/dbconfig');
const chatService = require('./services/chatservice');
const chatRoutes = require('./routes');

const app = express();
const server = http.createServer(app);

app.use(cors());  
app.use(express.json());

connectDB();

app.use('/api', chatRoutes);

chatService(server);

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
