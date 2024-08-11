// src/components/userlist.js
import React, { useState, useEffect } from 'react';

const Userlist = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');  // Nuevo estado para la contraseña
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  // Función para obtener los usuarios desde la API
  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  // Función para crear un nuevo usuario
  const handleCreateUser = async (e) => {
    e.preventDefault();
    const newUser = { name, email, password };
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });
      if (response.ok) {
        fetchUsers(); // Actualiza la lista de usuarios
        setName('');  // Limpia el campo de nombre
        setEmail(''); // Limpia el campo de email
        setPassword(''); // Limpia el campo de contraseña
      }
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  // Función para editar un usuario existente
  const handleEditUser = (user) => {
    setName(user.name);
    setEmail(user.email);
    setPassword('');  // Resetea el campo de contraseña, para que no se muestre la contraseña actual
    setEditingUser(user.id);
  };

  // Función para actualizar un usuario
  const handleUpdateUser = async (e) => {
    e.preventDefault();
    const updatedUser = { name, email, password };
    try {
      const response = await fetch(`/api/users/${editingUser}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser),
      });
      if (response.ok) {
        fetchUsers(); // Actualiza la lista de usuarios
        setName('');  // Limpia el campo de nombre
        setEmail(''); // Limpia el campo de email
        setPassword(''); // Limpia el campo de contraseña
        setEditingUser(null); // Sale del modo de edición
      }
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  // Función para eliminar un usuario
  const handleDeleteUser = async (userId) => {
    try {
      const response = await fetch(`/api/users/${userId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        fetchUsers(); // Actualiza la lista de usuarios
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
      <h2 className="my-4">User List</h2>
      <form onSubmit={editingUser ? handleUpdateUser : handleCreateUser} className="mb-4">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {editingUser ? 'Update User' : 'Create User'}
        </button>
      </form>
      <ul className="list-group">
        {users.map((user) => (
          <li key={user.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{user.name} - {user.email}</span>
            <div>
              <button
                className="btn btn-warning btn-sm mr-2"
                onClick={() => handleEditUser(user)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDeleteUser(user.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Userlist;
