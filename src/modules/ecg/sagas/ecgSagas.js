import { call, put, takeEvery } from 'redux-saga/effects';
import { actions } from '../slices/ecgSlice';
import * as dataContext from '../dataProvider/ecgArrhythmiaDataContext';

function* sendEcg({ payload }) {
  try {
    const formData = new FormData();
    formData.append('file', payload.file);
    formData.append('title', payload.title);
    payload.history.push('/ecg/result');
    const res = yield call(dataContext.sendEcgRequest, formData);
    console.log(res);
    yield put(actions.sendEcgSuccess(res));
  } catch (e) {
    console.log(e);
  }
}

export default function* ecgSagas() {
  yield takeEvery(actions.sendEcgRequest, sendEcg);
}
