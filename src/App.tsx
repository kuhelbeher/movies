import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

import Auth from './containers/Auth';
import PrivateRoute from './components/PrivateRoute';

const useStyles = makeStyles({
  '@global': {
    fieldset: {
      border: 'none',
      margin: 0,
      padding: 0,
      minWidth: 0,
    },
  },
});

function App() {
  useStyles();

  return (
    <Switch>
      <Route path="/auth">
        <Auth />
      </Route>
      <PrivateRoute exact isAllowed={false} path="/">
        main route
      </PrivateRoute>
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
