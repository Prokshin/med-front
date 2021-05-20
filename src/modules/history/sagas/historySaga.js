import { call, put, takeEvery } from 'redux-saga/effects';
import { actions } from '../slices/HistorySlice';
import * as historyDataContext from '../dataProvider/historyDataContext';

function* fetchHistory() {
  try {
    const history = yield call(historyDataContext.getHistory);
    yield put(actions.fetchHistorySuccess(history));
  } catch (e) {
    yield put(actions.fetchHistoryError(e));
  }
}

export default function* historySaga() {
  yield takeEvery(actions.fetchHistoryRequest, fetchHistory);
}
