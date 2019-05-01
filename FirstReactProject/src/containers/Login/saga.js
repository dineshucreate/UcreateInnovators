import axios from 'axios';
import { takeEvery, call, put } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import { REQUEST_CALL_LOGIN_API } from './constants';
import { loginSuccess, loginFail } from './actions';
import config from '../../Config/config';

function* onLoginRequested({ username, password }) {
    try {
        const fcmToken = yield AsyncStorage.getItem('fcmToken');
        const loginData = yield call(axios.post, config.url, { username, password, fcmToken });
        console.log(`Login Data: ${JSON.stringify(loginData)}`);
        yield put(loginSuccess(loginData));
    } catch (error) {
        console.log(JSON.stringify(error.response.status));
        yield put(loginFail(error.log));
    }     
}

function* sagaLogin() {
    yield takeEvery(REQUEST_CALL_LOGIN_API, onLoginRequested);
}
 export default sagaLogin;
