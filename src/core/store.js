import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import coreReducer from './coreSlice'

import createSagaMiddleware from 'redux-saga'
import coreSaga from "./coreSaga";


const configureAppStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    const middlewares = [sagaMiddleware]
    const middleware = [
        ...getDefaultMiddleware({thunk: false}),
        ...middlewares
    ]

    const store = configureStore({
        reducer: {
            core: coreReducer,
        },
        middleware
    })

    sagaMiddleware.run(coreSaga);
    return store
};

export default configureAppStore;
