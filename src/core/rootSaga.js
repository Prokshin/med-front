import { all } from 'redux-saga/effects';
import { allModules } from '../modules/allModules';

export default function* rootSaga() {
  yield all([...allModules.sagas]);
}
