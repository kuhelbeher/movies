import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { Form } from 'react-final-form';

import { useAuth } from '../../../hooks/api';
import FormTextField from '../../../components/Form/FormTextField';

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
      {({ handleSubmit }) => (
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <fieldset disabled={loading} aria-busy={loading}>
            <FormTextField
              name="email"
              errors={errors}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Email Address"
              autoComplete="email"
              autoFocus
            />
            <FormTextField
              name="password"
              type="password"
              errors={errors}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
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
