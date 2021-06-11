import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  useFormik,
  Field, Form, Formik,
} from 'formik';
import { Link } from 'react-router-dom';
import { actions } from '../coreSlice';
import { validateEmail, validateName, validatePassword } from '../../../common/validators';

const LoginForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(actions.regRequest(values));
  };

  return (
    <main className="d-flex align-items-center vh-100">
      <div className="row w-100">
        <Formik
          initialValues={{
            email: '',
            password: '',
            firstName: '',
            lastName: '',
          }}
          onSubmit={onSubmit}
        >
          {({ errors, touched, isValidating }) => (
            <Form className="col-sm-4 offset-sm-4">
              <h1 className="h3 mb-3 fw-normal">Регистрация в системе</h1>
              {
                errors.firstName && touched.firstName
                && <div className="text-danger" role="alert">{errors.firstName}</div>
              }
              <div className="form-floating">
                <Field
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Имя"
                  className="form-control"
                  validate={validateName('Поле "Имя"')}
                />
                <label htmlFor="firstName">Имя</label>
              </div>
              {
                errors.lastName && touched.lastName
                && <div className="text-danger" role="alert">{errors.lastName}</div>
              }
              <div className="form-floating">
                <Field
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Фамилия"
                  className="form-control"
                  validate={validateName('Поле "Фамилия"')}
                />
                <label htmlFor="lastName">Фамилия</label>
              </div>
              {
                errors.email && touched.email
                && <div className="text-danger" role="alert">{errors.email}</div>
              }
              <div className="form-floating">
                <Field
                  className="form-control"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  validate={validateEmail('Email введён некорректно')}
                />
                <label htmlFor="email">Email</label>
              </div>
              {
                errors.password && touched.password
                && <div className="text-danger" role="alert">{errors.password}</div>
              }
              <div className="form-floating">
                <Field
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  name="password"
                  placeholder="Password"
                  validate={validatePassword}
                />
                <label htmlFor="floatingPassword">Пароль</label>
              </div>

              <button className="w-100 btn btn-lg btn-primary mt-3" type="submit">Зарегестрироваться</button>
            </Form>
          )}
        </Formik>
      </div>
      <div className="position-absolute bottom-0 start-50 translate-middle mb-4">
        <Link to="login" className="btn btn btn-outline-success mt-5" type="button">Войти</Link>
      </div>
    </main>
  );
};

export default React.memo(LoginForm);
