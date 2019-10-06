import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './auth/containers/Login';
import Register from './auth/containers/Register';

function App() {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route exact path="/">
        main route
      </Route>
    </Switch>
  );
}

export default App;
