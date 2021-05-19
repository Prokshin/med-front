import { Module } from '../Module';
import { userSlice } from './slices/userSlice';
import userSagas from './sagas/userSagas';

export default new Module('user', userSlice.reducer, userSagas());
