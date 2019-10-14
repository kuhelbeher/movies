import React from 'react';
import { Field } from 'react-final-form';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';

import { getError } from '../../utils/common';
import { Errors } from '../../types';

type Props = TextFieldProps & {
  name: string;
  errors?: Errors | null;
  error?: string;
  validate?: (value: string) => string | void;
};

function FormTextField({ errors, name, type, validate, ...rest }: Props) {
  return (
    <Field name={name} type={type} validate={validate}>
      {({ input, meta }) => {
        let err = meta.error && meta.touched && meta.error;

        if (!err && errors) {
          err = getError(errors.errors, name);
        }

        return (
          <TextField error={!!err} helperText={err} {...rest} {...input} />
        );
      }}
    </Field>
  );
}

export default FormTextField;
