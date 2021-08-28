import React from 'react';
import Home from './pages/home';
import Dashboard from './pages/dashboard';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Protected from './protected';
import DashBoard from './pages/dashboard';

const App = () => {
  return (
    <div className="app">
      <Router>
        <ul>
          <li><Link to="/">home</Link></li>
          <li><Link to="/dashboard">dashboard(protected)</Link></li>
        </ul>
        <Switch>
          <Route path="/" exact component={Home} />
          <Protected path="/dashboard" component={DashBoard} auth={false} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
