import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { Form } from 'react-final-form';

import FormTextField from '../../../components/Form/FormTextField';
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

function RegisterForm() {
  const classes = useStyles();

  const [{ data, loading, errors }, doRequest] = useAuth(false);

  const onSubmit = (values: {
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
  }) => {
    doRequest(values);
  };

  return (
    <Form onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <fieldset disabled={loading} aria-busy={loading}>
            <FormTextField
              name="name"
              errors={errors}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Name"
              autoComplete="name"
              autoFocus
            />
            <FormTextField
              name="email"
              errors={errors}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Email Address"
              autoComplete="email"
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
            <FormTextField
              name="passwordConfirmation"
              type="password"
              errors={errors}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Confirm Password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}>
              Sign Up
            </Button>
          </fieldset>
        </form>
      )}
    </Form>
  );
}

export default RegisterForm;
