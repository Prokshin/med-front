import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserInfo } from '../modules/user/selectors/userSelector';

const ProfilePage = () => {
  const user = useSelector(getUserInfo);
  return (
    <div className="p-5 mt-5 mb-4 bg-light rounded-3">
      {
            user && (
            <div className="container-fluid py-5">
              <h1 className="display-5 fw-bold">
                {user.firstName}
                {' '}
                {user.lastName}
              </h1>
              <p className="col-md-8 fs-4">
                {user.email}
              </p>
              <button className="btn me-3 btn-primary mh-100" type="button">Настройки</button>
              <button type="button" className="btn btn-danger">Выйти</button>
            </div>
            )
        }

    </div>
  );
};

export default React.memo(ProfilePage);
