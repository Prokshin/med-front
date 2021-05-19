import React, { useCallback, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserInfo } from '../../modules/user/selectors/userSelector';

const Menu = () => {
  const userInfo = useSelector(getUserInfo);

  const [show, setShow] = useState(false);

  const onClickHandler = useCallback(() => {
    setShow((status) => !status);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Med-it</Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={onClickHandler}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`collapse navbar-collapse ${show ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" exact to="/">Главная</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/history">История</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/services">Сервисы</NavLink>
            </li>
          </ul>
          <div className="d-flex">
            <NavLink className="btn btn-outline-success" to="/profile">
              {userInfo?.email}
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default React.memo(Menu);
