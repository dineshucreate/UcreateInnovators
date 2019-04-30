import axios from 'axios';
import { takeEvery, put, call } from 'redux-saga/effects';
import { GETUSERLIST, USERLISTSUCCESS, USERLISTFAILURE } from './constants';
import { getUserList,  } from './actions';
import { get } from 'http';

function* userList({}) {
	const url = ''; //`${API_URL}${kServiceAuthentication}`;
	try {
		const loginData = yield call(get);
		yield put(getUserList(loginData.data));
		console.log(loginData.data);
		// Alert(JSON.stringify(loginData.data));
		//	navigator.navigate('dashboard');
		// if (loginData.data.success === true) {
		//     yield put(loginSuccess(loginData.data));
		//    // navigator.navigate('flatList');
		//   } else {
		//     Alert.alert(loginData.data.message);
		//   }
	} catch (error) {
		yield put(loginFail(error));
		Alert.alert(`login failed: ${error}`);
	}
}
function* userListSaga() {
	yield takeEvery(GETUSERLIST, userList);
}
export default userListSaga;
