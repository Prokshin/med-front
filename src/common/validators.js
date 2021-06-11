export const validateEmail = (text) => (value) => {
  let error;

  if (!value) {
    error = 'Email не может быть пустым';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = text;
  }

  return error;
};

export const validatePassword = (value) => {
  let error;

  if (!value) {
    error = 'Пароль не может быть пустым';
  }

  return error;
};
