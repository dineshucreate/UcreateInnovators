import axios from 'axios';
import { takeEvery, call, put } from 'redux-saga/effects';
import { REQUEST_CALL_LOGIN_API } from './constants';
import { loginSuccess } from './actions';

function* onLoginRequested({ username, password }) {
    const url = 'https://production-review-tool.herokuapp.com/authentication';
    try {
        const simerData = yield call(axios.post, url, { username, password });
        console.log(`Login Data: ${JSON.stringify(simerData)}`);
        yield put(loginSuccess(simerData));
    } catch (error) {
     console.log(error.log);
    }     
}

function* sagaLogin() {
    yield takeEvery(REQUEST_CALL_LOGIN_API, onLoginRequested);
}
 export default sagaLogin;
