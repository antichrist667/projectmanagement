// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes'); 
const connection = require('./db/config/dbconfig'); 

const app = express();

app.use(cors()); 
app.use(bodyParser.json()); // Middleware para parsear JSON
app.use('/api', routes); // Configura las rutas de la API

module.exports = app; // Exporta la aplicación Express
