import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const navigateToUserCrud = () => {
    navigate('/user-crud');
  };

  return (
    <div className="container mt-5">
      <h2>Dashboard</h2>
      <div className="d-grid gap-2">
        <button className="btn btn-primary" onClick={navigateToUserCrud}>USER</button>
        <button className="btn btn-secondary">Button 2</button>
        <button className="btn btn-secondary">Button 3</button>
        <button className="btn btn-secondary">Button 4</button>
        <button className="btn btn-secondary">Button 5</button>
        <button className="btn btn-secondary">Button 6</button>
      </div>
    </div>
  );
};

export default Dashboard;
