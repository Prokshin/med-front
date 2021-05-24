import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { actions } from '../coreSlice';

const LoginForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: (values) => {
      dispatch(actions.regRequest(values));
    },
  });

  return (
    <main className="d-flex align-items-center vh-100">
      <div className="row w-100">
        <form className="col-sm-4 offset-sm-4" onSubmit={formik.handleSubmit}>
          <h1 className="h3 mb-3 fw-normal">Регистрация в системе</h1>
          <div className="form-floating">
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Имя"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              className="form-control"
            />
            <label htmlFor="firstName">Имя</label>
          </div>

          <div className="form-floating">
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Фамилия"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              className="form-control"
            />
            <label htmlFor="lastName">Фамилия</label>
          </div>

          <div className="form-floating">
            <input
              className="form-control"
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              name="password"
              placeholder="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <label htmlFor="floatingPassword">Пароль</label>
          </div>

          <button className="w-100 btn btn-lg btn-primary mt-3" type="submit">Зарегестрироваться</button>
        </form>
      </div>
      <div className="position-absolute bottom-0 start-50 translate-middle mb-4">
        <button className="btn btn btn-outline-success mt-5" type="button">Войти</button>
      </div>
    </main>
  );
};

export default React.memo(LoginForm);
