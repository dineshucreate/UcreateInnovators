import axios from 'axios';
import { takeEvery, put, call } from 'redux-saga/effects';
import { GETUSERLISTREQUEST } from './constant';
import { userListSuccess, userListFailure } from './action';

function* userList({}) {
	const url = 'http://dummy.restapiexample.com/api/v1/employees'; //`${API_URL}${kServiceAuthentication}`;
	try {
		const userListData = yield axios.get(url);
		yield put(userListSuccess(userListData.data));
		console.log(userListData.data);
		// Alert(JSON.stringify(loginData.data));
	} catch (error) {
		yield put(userListFailure(error));
	}
}
function* userListSaga() {
	yield takeEvery(GETUSERLISTREQUEST, userList);
}
export default userListSaga;
