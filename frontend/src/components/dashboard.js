import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const navigateToUserCrud = () => {
    navigate('/user-crud');
  };

  const navigateToAuditLogs = () => {
    navigate('/audit-logs');
  };

  const navigateToCreateProject = () => {
    navigate('/create-project');
  };

  const navigateToReadProjects = () => {
    navigate('/read-projects');
  };

  const navigateToUpdateProject = () => {
    navigate('/update-project');
  };

  const navigateToDeleteProject = () => {
    navigate('/delete-project');
  };

  return (
    <div className="container mt-5">
      <h2>Dashboard</h2>
      <div className="row gy-3">
        <div className="col-md-6">
          <button className="btn btn-primary btn-lg btn-block" onClick={navigateToUserCrud}>USER</button>
        </div>
        <div className="col-md-6">
          <button className="btn btn-secondary btn-lg btn-block" onClick={navigateToAuditLogs}>AUDIT LOGS</button>
        </div>
        <div className="col-md-6">
          <button className="btn btn-success btn-lg btn-block" onClick={navigateToCreateProject}>CREATE PROJECT</button>
        </div>
        <div className="col-md-6">
          <button className="btn btn-success btn-lg btn-block" onClick={navigateToReadProjects}>READ PROJECTS</button>
        </div>
        <div className="col-md-6">
          <button className="btn btn-success btn-lg btn-block" onClick={navigateToUpdateProject}>UPDATE PROJECT</button>
        </div>
        <div className="col-md-6">
          <button className="btn btn-success btn-lg btn-block" onClick={navigateToDeleteProject}>DELETE PROJECT</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
