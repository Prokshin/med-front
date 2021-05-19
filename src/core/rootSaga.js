import { all } from 'redux-saga/effects';
import { allModules } from '../modules/allModules';

export default function* rootSaga() {
  console.log(allModules.sagas);
  yield all([...allModules.sagas]);
}
