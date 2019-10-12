import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';

type Props = {
  isAllowed: boolean;
  exact?: boolean;
  path: string;
  children: React.ReactType | string;
};

const PrivateRoute = ({ children, isAllowed, ...rest }: Props) => {
  const location = useLocation();

  if (!isAllowed) {
    return (
      <Redirect
        to={{
          pathname: '/auth',
          state: { from: location },
        }}
      />
    );
  }

  return <Route {...rest}>{children}</Route>;
};

export default PrivateRoute;
