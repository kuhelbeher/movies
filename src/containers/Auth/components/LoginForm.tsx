import React from 'react';
import { TextField, Button, makeStyles } from '@material-ui/core';
import { Form, Field } from 'react-final-form';

import { useAuth } from '../../../hooks/api';

const useStyles = makeStyles(theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function LoginForm() {
  const classes = useStyles();

  const [{ data, loading, errors }, doRequest] = useAuth(true);

  const onSubmit = (values: { email: string; password: string }) => {
    doRequest(values);
  };

  return (
    <Form onSubmit={onSubmit}>
      {({ handleSubmit, pristine }) => (
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <fieldset disabled={loading} aria-busy={loading}>
            <Field name="email">
              {({ input }) => (
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Email Address"
                  autoComplete="email"
                  autoFocus
                  {...input}
                />
              )}
            </Field>
            <Field name="password" type="password">
              {({ input }) => (
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Password"
                  {...input}
                />
              )}
            </Field>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={pristine}
              className={classes.submit}>
              Sign In
            </Button>
          </fieldset>
        </form>
      )}
    </Form>
  );
}

export default LoginForm;
