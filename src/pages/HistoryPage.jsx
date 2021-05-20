import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../modules/history/slices/HistorySlice';
import HistoryContainer from '../modules/history/containers/HistoryContainer';

const HistoryPage = () => <HistoryContainer />;

export default React.memo(HistoryPage);
