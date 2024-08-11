// src/app.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Userlist from './components/user';  // Importa el componente con la primera letra en mayúscula

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-center my-4">Users Management</h1>
        <div className="container">
          <Userlist />  {/* Usa el componente con la primera letra en mayúscula */}
        </div>
      </header>
    </div>
  );
}

export default App;
