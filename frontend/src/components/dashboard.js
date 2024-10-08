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

  const navigateToCreateComment = () => {
    navigate('/create-comment');
  };

  const navigateToReadComments = () => {
    navigate('/read-comments');
  };

  const navigateToUpdateComment = () => {
    navigate('/update-comment');
  };

  const navigateToDeleteComment = () => {
    navigate('/delete-comment');
  };

  const navigateToCreateDocument = () => {
    navigate('/create-document');
  };

  const navigateToReadDocuments = () => {
    navigate('/read-documents');
  };

  const navigateToUpdateDocument = () => {
    navigate('/update-document');
  };

  const navigateToDeleteDocument = () => {
    navigate('/delete-document');
  };

  const navigateToCreateSuggestion = () => {
    navigate('/create-suggestion');
  };

  const navigateToReadSuggestions = () => {
    navigate('/read-suggestions');
  };

  const navigateToUpdateSuggestion = () => {
    navigate('/update-suggestion');
  };

  const navigateToDeleteSuggestion = () => {
    navigate('/delete-suggestion');
  };

  const navigateToChat = () => {
    navigate('/chat');
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
        <div className="col-md-6">
          <button className="btn btn-warning btn-lg btn-block" onClick={navigateToCreateComment}>CREATE COMMENT</button>
        </div>
        <div className="col-md-6">
          <button className="btn btn-warning btn-lg btn-block" onClick={navigateToReadComments}>READ COMMENTS</button>
        </div>
        <div className="col-md-6">
          <button className="btn btn-warning btn-lg btn-block" onClick={navigateToUpdateComment}>UPDATE COMMENT</button>
        </div>
        <div className="col-md-6">
          <button className="btn btn-warning btn-lg btn-block" onClick={navigateToDeleteComment}>DELETE COMMENT</button>
        </div>
        <div className="col-md-6">
          <button className="btn btn-info btn-lg btn-block" onClick={navigateToCreateDocument}>CREATE DOCUMENT</button>
        </div>
        <div className="col-md-6">
          <button className="btn btn-info btn-lg btn-block" onClick={navigateToReadDocuments}>READ DOCUMENTS</button>
        </div>
        <div className="col-md-6">
          <button className="btn btn-info btn-lg btn-block" onClick={navigateToUpdateDocument}>UPDATE DOCUMENT</button>
        </div>
        <div className="col-md-6">
          <button className="btn btn-info btn-lg btn-block" onClick={navigateToDeleteDocument}>DELETE DOCUMENT</button>
        </div>
        <div className="col-md-6">
          <button className="btn btn-danger btn-lg btn-block" onClick={navigateToCreateSuggestion}>CREATE SUGGESTION</button>
        </div>
        <div className="col-md-6">
          <button className="btn btn-danger btn-lg btn-block" onClick={navigateToReadSuggestions}>READ SUGGESTIONS</button>
        </div>
        <div className="col-md-6">
          <button className="btn btn-danger btn-lg btn-block" onClick={navigateToUpdateSuggestion}>UPDATE SUGGESTION</button>
        </div>
        <div className="col-md-6">
          <button className="btn btn-danger btn-lg btn-block" onClick={navigateToDeleteSuggestion}>DELETE SUGGESTION</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
