import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import userReducer from '../modules/user/slices/userSlice';
import coreReducer from '../modules/core/coreSlice';

import rootSaga from './rootSaga';
import { allModules } from '../modules/allModules';

const configureAppStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware];
  const middleware = [
    ...getDefaultMiddleware({
      thunk: false,
      serializableCheck: {
        ignoredActions: ['ecg/sendEcgRequest', 'eeg/sendEegRequest'],
      },
    }),
    ...middlewares,
  ];

  const store = configureStore({
    reducer: allModules.reducers,
    middleware,
  });

  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureAppStore;
