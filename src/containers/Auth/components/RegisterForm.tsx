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

const validateConfirmPassword = (
  password: string,
  confirmPassword: string,
): string | void => {
  if (password !== confirmPassword) {
    return 'Passwords should be the same';
  }
};

function RegisterForm() {
  const classes = useStyles();

  const [{ data, loading, errors }, doRequest] = useAuth(false);

  const onSubmit = ({
    confirmPassword, // omitting confirmPassword field
    ...values
  }: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    doRequest(values);
  };

  return (
    <Form onSubmit={onSubmit}>
      {({ handleSubmit, pristine, values }) => (
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <fieldset disabled={loading} aria-busy={loading}>
            <Field name="name">
              {({ input }) => (
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Name"
                  autoComplete="name"
                  autoFocus
                  {...input}
                />
              )}
            </Field>
            <Field name="email">
              {({ input }) => (
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Email Address"
                  autoComplete="email"
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
            <Field
              name="confirmPassword"
              type="password"
              validate={value =>
                validateConfirmPassword(values.password, value)
              }>
              {({ input, meta }) => (
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Confirm Password"
                  error={meta.error && meta.touched}
                  helperText={meta.error && meta.touched ? meta.error : ' '}
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
              Sign Up
            </Button>
          </fieldset>
        </form>
      )}
    </Form>
  );
}

export default RegisterForm;
