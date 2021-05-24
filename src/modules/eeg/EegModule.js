import { Module } from '../Module';
import { eegSlice } from './slices/eegSlice';
import eegSagas from './sagas/eegSaga';

export default new Module('eeg', eegSlice.reducer, eegSagas());
