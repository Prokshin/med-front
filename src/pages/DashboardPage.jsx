import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { actions } from '../modules/history/slices/HistorySlice';
import { getHistory } from '../modules/history/selectors/historySelectors';
import HistoryList from '../modules/history/components/HistoryList';
import ServicesList from '../modules/services/components/ServicesList';
import ServicesPage from './ServicesPage';

const DashboardPage = () => {
  const dispatch = useDispatch();

  const history = useSelector(getHistory);
  useEffect(() => {
    dispatch(actions.fetchHistoryRequest({ count: 3 }));
  }, []);
  return (
    <>
      <h2 className="mt-3">История исследований</h2>
      <HistoryList history={history} />
      <Link to="/history">Посмотреть всю историю</Link>
      <ServicesPage />
    </>
  );
};

export default React.memo(DashboardPage);
