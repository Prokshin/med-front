export const validateLength = (length) => (value) => {
  let error;
  if (length < value.length) {
    error = `Максимальное количество символов - ${length}`;
  }
  return error;
};

export const validateEmail = (text) => (value) => {
  let error;
  if (!value) {
    error = 'Email не может быть пустым';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = text;
  } else {
    error = validateLength(50)(value);
  }
  return error;
};

export const validatePassword = (value) => {
  let error;
  if (!value) {
    error = 'Пароль не может быть пустым';
  } else {
    error = validateLength(50)(value);
  }
  return error;
};

export const validateName = (name) => (value) => {
  let error;
  if (!value) {
    error = `${name} не может быть пустым`;
  } else if (!/[a-zA-z]$/i.test(value)) {
    error = 'Введён некорректный символ';
  } else {
    error = validateLength(40)(value);
  }
  return error;
};

export const validateTitle = (value) => {
  let error;
  if (!value) {
    error = 'Название исследования не может быть пустым';
  } else {
    error = validateLength(100)(value);
  }
  return error;
};
