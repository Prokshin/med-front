import { call, takeEvery, put } from 'redux-saga/effects';
import { actions } from '../slices/userSlice';
import { getCurrentUser } from '../dataProvider/userDataContext';

function* fetchUser() {
  try {
    const user = yield call(getCurrentUser);
    if (user) {
      yield put(actions.fetchUserSuccess(user));
    }
  } catch (e) {
    console.error(e);
  }
}

export default function* userSagas() {
  yield takeEvery(actions.fetchUserRequest, fetchUser);
}
