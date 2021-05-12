import { all } from 'redux-saga/effects';
import coreSaga from './coreSaga';
import userSagas from '../modules/user/sagas/userSagas';

export default function* rootSaga() {
  yield all([
    coreSaga(),
    userSagas(),
  ]);
  // code after all-effect
}
