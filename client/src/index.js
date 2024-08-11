// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';  // Cambia a 'App' con mayúscula al importarlo

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />  {/* Usa el componente con la primera letra en mayúscula */}
  </React.StrictMode>
);
