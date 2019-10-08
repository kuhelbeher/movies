import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';

type Props = {
  isAuthenticated: boolean;
  exact?: boolean;
  path: string;
  children: React.ReactType | string;
};

const PrivateRoute = ({ children, isAuthenticated, ...rest }: Props) => {
  const location = useLocation();

  if (!isAuthenticated) {
    return (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: location },
        }}
      />
    );
  }

  return <Route {...rest}>{children}</Route>;
};

export default PrivateRoute;
