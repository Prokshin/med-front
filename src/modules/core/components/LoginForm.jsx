import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../coreSlice';

const LoginForm = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(actions.loginRequest({ email, password }));
  };

  return (
    <main className="d-flex align-items-center vh-100">
      <div className="row w-100">
        <form className="col-sm-4 offset-sm-4" onSubmit={onSubmit}>
          <h1 className="h3 mb-3 fw-normal">Пожалуйся, войдите в систему</h1>

          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={onChangeEmail} />
            <label htmlFor="floatingInput">Email</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={onChangePassword} />
            <label htmlFor="floatingPassword">Пароль</label>
          </div>

          <button className="w-100 btn btn-lg btn-primary mt-3" type="submit">войти</button>
        </form>
      </div>
      <div className="position-absolute bottom-0 start-50 translate-middle mb-4">
        <button className="btn btn btn-outline-success mt-5" type="button">регистрация</button>
      </div>
    </main>
  );
};

export default React.memo(LoginForm);
