import { GETUSERLISTREQUEST, USERLISTSUCCESS, USERLISTFAILURE } from './constant';

export const getUserList = () => ({
	type: GETUSERLISTREQUEST
});

export const userListSuccess = (data) => ({
	type: USERLISTSUCCESS,
	data: data
});

export const userListFailure = () => ({
	type: USERLISTFAILURE
});
