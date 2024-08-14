import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserCrud = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ email: '', password: '' });
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://userservice-8bd80403ee07.herokuapp.com/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createUser = async () => {
    try {
      await axios.post('https://userservice-8bd80403ee07.herokuapp.com/api/users', newUser);
      fetchUsers();
    } catch (error) {
      console.error(error);
    }
  };

  const updateUser = async () => {
    try {
      await axios.put(`https://userservice-8bd80403ee07.herokuapp.com/api/users/${selectedUser.id}`, selectedUser);
      fetchUsers();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`https://userservice-8bd80403ee07.herokuapp.com/api/users/${id}`);
      fetchUsers();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>User Management</h2>
      <div className="mb-3">
        <label>Email</label>
        <input 
          type="email" 
          className="form-control" 
          value={newUser.email} 
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} 
        />
        <label>Password</label>
        <input 
          type="password" 
          className="form-control" 
          value={newUser.password} 
          onChange={(e) => setNewUser({ ...newUser, password: e.target.value })} 
        />
        <button className="btn btn-success mt-3" onClick={createUser}>Create User</button>
      </div>
      <hr />
      <h3>User List</h3>
      <ul className="list-group">
        {users.map(user => (
          <li key={user.id} className="list-group-item">
            {user.email}
            <button className="btn btn-danger float-end" onClick={() => deleteUser(user.id)}>Delete</button>
            <button 
              className="btn btn-warning float-end me-2" 
              onClick={() => setSelectedUser(user)}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
      {selectedUser && (
        <div className="mt-4">
          <h4>Edit User</h4>
          <label>Email</label>
          <input 
            type="email" 
            className="form-control" 
            value={selectedUser.email} 
            onChange={(e) => setSelectedUser({ ...selectedUser, email: e.target.value })} 
          />
          <label>Password</label>
          <input 
            type="password" 
            className="form-control" 
            value={selectedUser.password} 
            onChange={(e) => setSelectedUser({ ...selectedUser, password: e.target.value })} 
          />
          <button className="btn btn-primary mt-3" onClick={updateUser}>Update User</button>
        </div>
      )}
    </div>
  );
};

export default UserCrud;
