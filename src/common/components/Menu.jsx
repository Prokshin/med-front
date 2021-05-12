import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserInfo } from '../../modules/user/selectors/userSelector';

const Menu = () => {
  const userInfo = useSelector(getUserInfo);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Med-it</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
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
            <NavLink className="btn btn-outline-success" type="submit" to="/settings">
              {userInfo.email}
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default React.memo(Menu);
