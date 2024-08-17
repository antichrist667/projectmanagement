import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://userservice-zondeli7dq-uc.a.run.app/api/login', {
        email,
        password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      
      console.log(response.data);

      if (response.data && response.data.token) {
        
        localStorage.setItem('token', response.data.token);
        
        setError('');
        
        navigate('/dashboard');
      } else {
        
        setError('Login failed. Please check your credentials.');
      }
    } catch (error) {
      
      console.error('Error during login:', error);
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;
