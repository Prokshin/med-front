import { Module } from '../Module';
import { historySlice } from './slices/HistorySlice';
import historySaga from './sagas/historySaga';

export default new Module('history', historySlice.reducer, historySaga());
