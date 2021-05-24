import { combineReducers } from 'redux';
import userReducer, { userSlice } from './user/slices/userSlice';
import UserModule from './user/UserModule';
import CoreModule from './core/CoreModule';
import HistoryModule from './history/HistoryModule';
import EcgArrhythmiaModule from './ecg/EcgArrhythmiaModule';
import EegModule from './eeg/EegModule';

export const allModules = {
  reducers: combineReducers({
    [CoreModule.getName()]: CoreModule.getReducers(),
    [UserModule.getName()]: UserModule.getReducers(),
    [HistoryModule.getName()]: HistoryModule.getReducers(),
    [EcgArrhythmiaModule.getName()]: EcgArrhythmiaModule.getReducers(),
    [EegModule.getName()]: EegModule.getReducers(),
  }),
  sagas: [
    CoreModule.getSagas(),
    UserModule.getSagas(),
    HistoryModule.getSagas(),
    EcgArrhythmiaModule.getSagas(),
    EegModule.getSagas(),
  ],
};
