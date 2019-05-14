import axios from 'axios';
import { takeEvery, put, call } from 'redux-saga/effects';
import { GETPHOTOSLISTREQUEST } from './constant';
import { photoListSuccess, photoListFailure } from './action';

function* onPhotoListRequest({ page }) {
	console.log('Page value', page);

	const url = `https://jsonplaceholder.typicode.com/photos?_limit=20&_page=${page}`; //`${API_URL}${kServiceAuthentication}`;
	try {
		const profileData = yield axios.get(url);
		console.log('Profile Saga', profileData);
		yield put(photoListSuccess(profileData.data));
	} catch (error) {
		yield put(photoListFailure(error));
	}
}
function* profileSaga() {
	yield takeEvery(GETPHOTOSLISTREQUEST, onPhotoListRequest);
}
export default profileSaga;
