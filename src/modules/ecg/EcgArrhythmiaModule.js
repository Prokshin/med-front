import { Module } from '../Module';
import { ecgSlice } from './slices/ecgSlice';
import ecgSagas from './sagas/ecgSagas';

export default new Module('ecgArrhythmia', ecgSlice.reducer, ecgSagas());
