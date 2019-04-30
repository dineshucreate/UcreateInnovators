import { LOGIN_REQUESTED, REQUEST_SUCCESS, REQUEST_FAIL } from './constants';
export const loginRequest = (email, password, navigation) => ({
	type: LOGIN_REQUESTED,
	email,
	password,
	navigation
});
export const loginSuccess = (data) => ({
	type: REQUEST_SUCCESS,
	data
});
export const loginFail = () => ({
	type: REQUEST_FAIL
});
