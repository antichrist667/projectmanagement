const path = require('path');
const express = require('express');
const app = express();

// Sirve archivos estáticos desde el directorio 'build'
app.use(express.static(path.join(__dirname, 'build')));

// Maneja cualquier solicitud no reconocida devolviendo `index.html`
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 
