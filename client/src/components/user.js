// src/components/user.js
const API_URL = 'https://projectmanagement-fbd33389f875.herokuapp.com/api';
import React, { useState, useEffect } from 'react';

const Userlist = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch(`${API_URL}/users`); 
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    const newUser = { name, email, password };
    try {
      const response = await fetch(`${API_URL}/users`, { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });
      if (response.ok) {
        fetchUsers();
        setName('');
        setEmail('');
        setPassword('');
      }
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const handleEditUser = (user) => {
    setName(user.name);
    setEmail(user.email);
    setPassword('');
    setEditingUser(user.id);
  };

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    const updatedUser = { name, email, password };
    try {
      const response = await fetch(`${API_URL}/users/${editingUser}`, { 
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser),
      });
      if (response.ok) {
        fetchUsers();
        setName('');
        setEmail('');
        setPassword('');
        setEditingUser(null);
      }
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      const response = await fetch(`${API_URL}/users/${userId}`, { 
        method: 'DELETE',
      });
      if (response.ok) {
        fetchUsers();
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
