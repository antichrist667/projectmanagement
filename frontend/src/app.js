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
import CreateComment from './components/createcomment';
import ReadComments from './components/readcomments';
import UpdateComment from './components/updatecomment';
import DeleteComment from './components/deletecomment';

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
        <Route path="/create-comment" element={<CreateComment />} />
        <Route path="/read-comments" element={<ReadComments />} />
        <Route path="/update-comment" element={<UpdateComment />} />
        <Route path="/delete-comment" element={<DeleteComment />} />
      </Routes>
    </Router>
  );
};

export default App;
