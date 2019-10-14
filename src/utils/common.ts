import { FieldsErrors } from '../types';

export const getError = (
  errors: FieldsErrors | undefined,
  key: string,
): string => {
  if (!errors || !errors[key]) {
    return '';
  }

  return errors[key][0];
};
