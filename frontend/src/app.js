import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/login';
import Dashboard from './components/dashboard';
import UserCrud from './components/usercrud';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/user-crud" component={UserCrud} />
      </Switch>
    </Router>
  );
};

export default App;
