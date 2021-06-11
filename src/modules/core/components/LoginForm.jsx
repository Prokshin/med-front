import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Field, Form, Formik,
} from 'formik';
import { Link } from 'react-router-dom';
import { actions } from '../coreSlice';
import { validateEmail, validatePassword } from '../../../common/validators';

const LoginForm = () => {
  const dispatch = useDispatch();

  const onSubmit = ({ email, password }) => {
    dispatch(actions.loginRequest({ email, password }));
  };

  return (
    <main className="d-flex align-items-center vh-100">
      <div className="row w-100">
        <Formik
          initialValues={{
            email: '', password: '',
          }}
          onSubmit={onSubmit}
        >
          {({ errors, touched, isValidating }) => (
            <Form className="col-sm-4 offset-sm-4">
              <h1 className="h3 mb-3 fw-normal">Пожалуйся, войдите в систему</h1>
              {
                errors.email && touched.email
                && <div className="text-danger" role="alert">{errors.email}</div>
              }
              <div className="form-floating">
                <Field
                  name="email"
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  validate={validateEmail('Введён неверный email')}
                />
                <label htmlFor="floatingInput">Email</label>
              </div>
              {
                errors.password && touched.password
                && <div className="text-danger" role="alert">{errors.password}</div>
              }
              <div className="form-floating">
                <Field
                  name="password"
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  validate={validatePassword}
                />
                <label htmlFor="floatingPassword">Пароль</label>
              </div>

              <button className="w-100 btn btn-lg btn-primary mt-3" type="submit">войти</button>
            </Form>
          )}
        </Formik>
      </div>
      <div className="position-absolute bottom-0 start-50 translate-middle mb-4">
        <Link to="reg" className="btn btn btn-outline-success mt-5" type="button">регистрация</Link>
      </div>
    </main>
  );
};

export default React.memo(LoginForm);
