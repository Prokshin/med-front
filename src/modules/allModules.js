import { combineReducers } from 'redux';
import userReducer, { userSlice } from './user/slices/userSlice';
import UserModule from './user/UserModule';
import CoreModule from './core/CoreModule';

export const allModules = {
  reducers: combineReducers({
    [CoreModule.getName()]: CoreModule.getReducers(),
    [UserModule.getName()]: UserModule.getReducers(),
  }),
  sagas: [
    CoreModule.getSagas(),
    UserModule.getSagas(),
  ],
};
