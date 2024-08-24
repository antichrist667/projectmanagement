import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as jwt_decode from 'jwt-decode';
import 'bootstrap/dist/css/bootstrap.min.css';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const [userId, setUserId] = useState(null);
  const [ws, setWs] = useState(null);

  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwt_decode(token);
      setUserId(decodedToken.id);
    } else {
      setError('Usuario no autenticado. Inicia sesión.');
    }
  }, []);

  
  const fetchMessages = async () => {
    try {
      const response = await axios.get('https://chatservice-zondeli7dq-uc.a.run.app/api/chats');
      setMessages(response.data);
    } catch (error) {
      console.error('Error al obtener los mensajes:', error);
      setError('Error al obtener los mensajes');
    }
  };

  
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

      await axios.post('https://chatservice-zondeli7dq-uc.a.run.app/api/chats', newMessage, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`, // Envía el token en el header
        },
      });

      setText('');
      setError('');
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      setError('Error al enviar el mensaje');
    }
  };

  
  useEffect(() => {
    const websocket = new WebSocket('ws://localhost:8080'); 

    websocket.onmessage = (event) => {
      const newMessage = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    setWs(websocket);

    return () => {
      websocket.close();
    };
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Chat</h2>

      {/* Mostrar los mensajes del chat */}
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

      {/* Formulario para enviar un nuevo mensaje */}
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
