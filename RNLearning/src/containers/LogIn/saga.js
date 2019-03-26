import { takeEvery, put, call } from 'redux-saga/effects';
import { LOGIN_REQUESTED, REQUEST_SUCCESS } from './constants';
import { API_URL, kServiceAuthentication } from '../../utilities/config';
import axios from 'axios';
import { loginFail, loginSuccess } from './actions';
import AsyncStorageUtil, { LoginData } from '../../utilities/asyncStorage';

function* onLoginRequested({ email, password, navigator }) {
  const url = `${API_URL}` + `${kServiceAuthentication}`;
  try {
    const loginData = yield call(axios.post, url, { username: email, password: password });
    if (loginData.data.success === true) {
      yield put(loginSuccess(loginData.data));
      navigator.navigate('home');
    } else {
      yield put(loginFail(error));
      alert(loginData.data.message);
    }
  } catch (error) {
    yield put(loginFail(error));
    alert(`login failed: ${error}`);
  }
}

function* sagaLogin() {
  yield takeEvery(LOGIN_REQUESTED, onLoginRequested);
}
export default sagaLogin;