import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../slices/HistorySlice';
import HistoryList from '../components/HistoryList';
import { getHistory, getHistoryLoading } from '../selectors/historySelectors';
import Loader from '../../../common/components/Loader';

const HistoryContainer = () => {
  const dispatch = useDispatch();
  const history = useSelector(getHistory);
  const loading = useSelector(getHistoryLoading);

  useEffect(() => {
    dispatch(actions.fetchHistoryRequest(''));
  }, []);
  return (
    <div>
      <Loader loading={loading}>
        <HistoryList history={history} />
      </Loader>
    </div>
  );
};

export default React.memo(HistoryContainer);
