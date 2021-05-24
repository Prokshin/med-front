import { createSelector } from '@reduxjs/toolkit';

const eeg = (state) => state.eeg;

export const getEegLoading = createSelector(eeg, (data) => data.loading);
