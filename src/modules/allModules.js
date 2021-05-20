import { combineReducers } from 'redux';
import userReducer, { userSlice } from './user/slices/userSlice';
import UserModule from './user/UserModule';
import CoreModule from './core/CoreModule';
import HistoryModule from './history/HistoryModule';

export const allModules = {
  reducers: combineReducers({
    [CoreModule.getName()]: CoreModule.getReducers(),
    [UserModule.getName()]: UserModule.getReducers(),
    [HistoryModule.getName()]: HistoryModule.getReducers(),
  }),
  sagas: [
    CoreModule.getSagas(),
    UserModule.getSagas(),
    HistoryModule.getSagas(),
  ],
};
