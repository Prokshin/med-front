import { createSelector } from '@reduxjs/toolkit';

const ecg = (state) => state.ecgArrhythmia;

export const getEcgLastResult = createSelector(ecg, (data) => data?.lastResult);
export const getEcgLoading = createSelector(ecg, (data) => data?.loading);
