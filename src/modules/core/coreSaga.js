import { takeEvery, call } from 'redux-saga/effects';
import { actions } from './coreSlice';
import * as dataProvider from './coreDataProvider';

function* login({ payload }) {
  try {
    // eslint-disable-next-line camelcase
    const { access_token } = yield call(dataProvider.login, payload);
    localStorage.setItem('token', access_token);
    window.location.replace('/');
  } catch (e) {
    //
  }
}

function* logout() {
  yield localStorage.removeItem('token');
  yield window.location.replace('/login');
}

export default function* coreSaga() {
  yield takeEvery(actions.loginRequest, login);
  yield takeEvery(actions.logoutRequest, logout);
}
