import axios from 'axios';
import { takeEvery, put, call } from 'redux-saga/effects';
import { LOGIN_REQUESTED } from './constants';
import { loginSuccess, loginFail } from './actions';

function* onLoginRequest({ email, password, navigation }) {
	console.log('Saga');

	const bodyValue = {
		email: email,
		password: password
	};

	const headerValue = {
		'Content-Type': 'application/json',
		'ZUMO-API-VERSION': '2.0.0',
		'Ocp-Apim-Subscription-Key': '6c192d2e80bb49a8b90f6d684cf18b9b'
	};
	const url = 'https://footballalbum-prod-api.imfootball.me/userapi/api/Auth/Login'; //`${API_URL}${kServiceAuthentication}`;
	try {
		const loginData = yield call(axios.post, url, bodyValue, { headers: headerValue });
		yield put(loginSuccess(loginData.data));
		console.log(loginData.data);
		navigation.navigate('drawer');
	} catch (error) {
		yield put(loginFail(error));
		Alert.alert(`login failed: ${error}`);
	}
}
function* loginSaga() {
	yield takeEvery(LOGIN_REQUESTED, onLoginRequest);
}
export default loginSaga;
