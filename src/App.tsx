import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Auth from './containers/Auth';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Switch>
      <Route path="/auth">
        <Auth />
      </Route>
      <PrivateRoute exact isAuthenticated={false} path="/">
        main route
      </PrivateRoute>
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
