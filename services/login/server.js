require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbConnect = require('./db/config/dbconfig'); 
const routes = require('./routes');

const app = express();

// Configuración CORS
const corsOptions = {
  origin: '*', // Permitir cualquier origen
  methods: ['GET', 'POST', 'OPTIONS'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
  optionsSuccessStatus: 200 // Código de éxito para las solicitudes OPTIONS
};

// Aplicar configuración CORS
app.use(cors(corsOptions));

// Middleware para procesar cuerpos JSON
app.use(express.json());

// Rutas
app.use('/api', routes);

// Puerto
const PORT = process.env.PORT || 3006;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
