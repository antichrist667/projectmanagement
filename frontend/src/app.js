import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Dashboard from './components/dashboard';
import UserCrud from './components/usercrud';
import AuditLogs from './components/audit'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user-crud" element={<UserCrud />} />
        <Route path="/audit-logs" element={<AuditLogs />} />
      </Routes>
    </Router>
  );
};

export default App;
