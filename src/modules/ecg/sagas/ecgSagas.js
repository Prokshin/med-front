import { call, put, takeEvery } from 'redux-saga/effects';
import { actions } from '../slices/ecgSlice';
import { actions as coreActions } from '../../core/coreSlice';
import * as dataContext from '../dataProvider/ecgArrhythmiaDataContext';

function* sendEcg({ payload }) {
  try {
    const formData = new FormData();
    formData.append('file', payload.file);
    formData.append('title', payload.title);
    const res = yield call(dataContext.sendEcgRequest, formData);
    yield put(coreActions.showModal({
      title: res.title,
      content: res.text,
    }));
    yield put(actions.sendEcgSuccess(res));
  } catch (e) {
    yield put(actions.sendEcgError(e));
  }
}

export default function* ecgSagas() {
  yield takeEvery(actions.sendEcgRequest, sendEcg);
}
