import { createSelector } from '@reduxjs/toolkit';

const history = (state) => state.history;

export const getHistory = createSelector(history, (data) => data?.info);
export const getHistoryLoading = createSelector(history, (data) => data?.loading);
