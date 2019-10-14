export interface FieldsErrors {
  [key: string]: string[];
}

export interface Errors {
  message: string;
  errors?: FieldsErrors;
}
