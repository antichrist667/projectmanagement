// server.js
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes'); // Asegúrate de que 'routes.js' está configurado correctamente
const connection = require('./db/config/dbconfig'); // Asegúrate de que la configuración de la base de datos es correcta

const app = express();

app.use(bodyParser.json()); // Middleware para parsear JSON
app.use('/api', routes); // Configura las rutas de la API

module.exports = app; // Exporta la aplicación Express
