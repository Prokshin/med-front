import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../modules/user/slices/userSlice';

const DashboardPage = () => {
  const dispatch = useDispatch();
  return (
    <h1>Dashboard</h1>
  );
};

export default React.memo(DashboardPage);
