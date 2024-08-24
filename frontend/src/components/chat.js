import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const [userId, setUserId] = useState(null);
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
    } else {
      setError('Usuario no autenticado. Inicia sesión.');
    }
  }, []);

  useEffect(() => {
    const websocketUrl = 'ws://chatservice-zondeli7dq-uc.a.run.app'; 
    const websocket = new WebSocket(websocketUrl);

    websocket.onopen = () => {
      console.log('Conectado al servidor WebSocket');
    };

    websocket.onerror = (error) => {
      console.error('Error en la conexión WebSocket:', error);
    };

    websocket.onmessage = (event) => {
      const newMessage = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    setWs(websocket);

    return () => {
      websocket.close();
    };
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!text.trim()) {
      setError('El mensaje no puede estar vacío');
      return;
    }

    try {
      const newMessage = {
        id_user: userId,
        texto: text,
      };

      // Enviar el mensaje al servidor WebSocket
      ws.send(JSON.stringify(newMessage));
      setText('');
      setError('');
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      setError('Error al enviar el mensaje');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Chat</h2>

      <div className="mb-4" style={{ maxHeight: '400px', overflowY: 'auto' }}>
        {messages.length === 0 ? (
          <div>No hay mensajes.</div>
        ) : (
          messages.map((msg, index) => (
            <div key={index} className="border rounded p-2 mb-2 bg-light">
              <strong>Usuario {msg.id_user}:</strong> {msg.texto} <br />
              <small className="text-muted">{new Date(msg.timestamp).toLocaleString()}</small>
            </div>
          ))
        )}
      </div>

      <form onSubmit={sendMessage}>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Escribe tu mensaje</label>
          <input
            type="text"
            className="form-control"
            id="message"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
};

export default Chat;
