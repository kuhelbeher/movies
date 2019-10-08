import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './containers/Auth/Login';
import Register from './containers/Auth/Register';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <PrivateRoute exact isAuthenticated={false} path="/">
        main route
      </PrivateRoute>
    </Switch>
  );
}

export default App;
