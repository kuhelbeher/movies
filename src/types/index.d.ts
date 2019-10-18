export interface FieldsErrors {
  [key: string]: string[];
}

export interface Errors {
  message: string;
  errors?: FieldsErrors;
}

export interface Token {
  tokenType: string;
  accessToken: string;
  expiresAt: string;
}
