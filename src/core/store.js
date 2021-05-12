import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import userReducer from '../modules/user/slices/userSlice';
import coreReducer from './coreSlice';

import rootSaga from './rootSaga';

const configureAppStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware];
  const middleware = [
    ...getDefaultMiddleware({ thunk: false }),
    ...middlewares,
  ];

  const store = configureStore({
    reducer: {
      core: coreReducer,
      user: userReducer,
    },
    middleware,
  });

  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureAppStore;
