import { call, put, takeEvery } from 'redux-saga/effects';
import { actions } from '../slices/eegSlice';
import { actions as coreActions } from '../../core/coreSlice';
import * as dataContext from '../dataProvider/eegDataContext';

function* sendEeg({ payload }) {
  try {
    const formData = new FormData();
    formData.append('file', payload.file);
    formData.append('title', payload.title);
    const res = yield call(dataContext.sendEegRequest, formData);
    yield put(coreActions.showModal({
      title: res.title,
      content: res.text,
    }));
    yield put(actions.sendEegSuccess(res));
  } catch (e) {
    yield put(actions.sendEegError(e));
  }
}

export default function* eegSagas() {
  yield takeEvery(actions.sendEegRequest, sendEeg);
}
