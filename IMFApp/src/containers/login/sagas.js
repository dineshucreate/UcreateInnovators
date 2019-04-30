import Axios from "axios";
import { AsyncStorage } from 'react-native';
import { takeEvery, put } from 'redux-saga/effects';
import { LOGIN_REQUESTED } from './constants';
import { loginFail, loginSuccess } from './actions';
import { kSubscriptionKey } from './../../utilities/config'

function* onLoginRequested({ email, password, navigator }) {
    const url = `https://footballalbum-prod-api.imfootball.me/UserAPI/api/Auth/Login`;
    try {
        const config = {
            method: 'post',
            headers: {
                'ZUMO-API-VERSION': '2.0.0',
                'Content-Type': 'application/json',
                'Ocp-Apim-Subscription-Key': kSubscriptionKey,
            },
            url,
            responseType: 'json',
            data: { email: email, password: password },
        };
        const loginData = yield Axios(config);
        console.log('LoginData: ' + JSON.stringify(loginData));
        if (loginData.status === 200) {
            yield AsyncStorage.setItem('userData', JSON.stringify(loginData.data.user))
            yield put(loginSuccess())
            navigator.navigate('Home');
        } else {
            yield put(loginFail())
            alert('please enter valid credentials')
        }
    } catch (error) {
        yield put(loginFail())
        alert(JSON.stringify(error.response.data.message));
    }
}

function* sagaLogin() {
    yield takeEvery(LOGIN_REQUESTED, onLoginRequested);
}
export default sagaLogin;