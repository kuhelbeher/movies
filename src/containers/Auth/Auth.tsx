import React, { useState } from 'react';
import { Link, Paper, Grid, makeStyles } from '@material-ui/core';

import { LoginForm, RegisterForm, AuthHeader } from './components';

// Design is taken from here - https://material-ui.com/getting-started/templates/sign-in-side/

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const classes = useStyles();

  const toggleForms = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <AuthHeader>{isLogin ? 'Sign in' : 'Sing up'}</AuthHeader>
          {isLogin ? <LoginForm /> : <RegisterForm />}
          <Grid container>
            <Grid item>
              <Link component="button" variant="body2" onClick={toggleForms}>
                {isLogin
                  ? "Don't have an account? Sign Up"
                  : 'Already have an acount? Sign in'}
              </Link>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
}

export default Login;
