import axios from 'axios';
import { Alert } from 'react-native';
import { takeEvery, put, call } from 'redux-saga/effects';
import { LOGIN_REQUESTED } from './constants';
//import { API_URL, kServiceAuthentication } from '../../utilities/config';
import { loginFail, loginSuccess } from './actions';

function* onLoginRequested({ email, password, navigator }) {
    // const url = `${API_URL}${kServiceAuthentication}`;
    // try {
    //     const loginData = yield call(axios.post, url, { username: email, password });
    //     if (loginData.data.success === true) {
    //         yield put(loginSuccess(loginData.data));
    //         navigator.navigate('flatList');
    //     } else {
    //         Alert.alert(loginData.data.message);
    //     }
    // } catch (error) {
    //     yield put(loginFail(error));
    //     Alert.alert(`login failed: ${error}`);
    // }
}

function* sagaLogin() {
    yield takeEvery(LOGIN_REQUESTED, onLoginRequested);
}
export default sagaLogin;