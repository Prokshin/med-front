import {takeEvery, call} from 'redux-saga/effects'
import {actions} from "./coreSlice";
import * as dataProvider from './coreDataProvider';

export default function* coreSaga() {
   yield takeEvery(actions.loginRequest, login)
}

function* login({payload}){
    try {
        const {access_token} = yield call(dataProvider.login, payload);
        localStorage.setItem('token', access_token);
    }
    catch (e) {
        //
        console.log(e)
    }
}
