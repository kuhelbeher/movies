import React from 'react';
import { TextField, Button, makeStyles } from '@material-ui/core';
import { Form, Field } from 'react-final-form';

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

  const onSubmit = (values: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    console.log(values);
  };

  return (
    <Form onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
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
          <Field name="password">
            {({ input }) => (
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Password"
                type="password"
                {...input}
              />
            )}
          </Field>
          <Field name="confirmPassword">
            {({ input }) => (
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Confirm Password"
                type="password"
                {...input}
              />
            )}
          </Field>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}>
            Sign Up
          </Button>
        </form>
      )}
    </Form>
  );
}

export default RegisterForm;
