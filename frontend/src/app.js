import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Dashboard from './components/dashboard';
import UserCrud from './components/usercrud';
import AuditLogs from './components/audit';
import CreateProject from './components/createproject';
import ReadProjects from './components/readprojects';
import UpdateProject from './components/updateproject';
import DeleteProject from './components/deleteproject';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user-crud" element={<UserCrud />} />
        <Route path="/audit-logs" element={<AuditLogs />} />
        <Route path="/create-project" element={<CreateProject />} />
        <Route path="/read-projects" element={<ReadProjects />} />
        <Route path="/update-project" element={<UpdateProject />} />
        <Route path="/delete-project" element={<DeleteProject />} />
      </Routes>
    </Router>
  );
};

export default App;
