import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors {
  const minhaValidacao: Errors = {};


  err.inner.forEach((error) => {
    minhaValidacao[error.path] = error.message;
  });

  return minhaValidacao;
}
