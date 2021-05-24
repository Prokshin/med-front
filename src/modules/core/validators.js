export function validateEmail(value) {
  let error;
  if (!value) {
    error = 'Обязательное поле';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Некорректный формат email';
  }
  return error;
}

export function required(value) {
  return !value && 'обязательное поле';
}
