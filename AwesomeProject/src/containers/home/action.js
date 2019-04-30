import { GETUSERLIST, USERLISTSUCCESS, USERLISTFAILURE } from './constant';
export const getUserList = () => ({
	type: GETUSERLIST
});

export const userListSuccess = (data) => ({
	type: USERLISTSUCCESS,
	data: data
});

export const userListFailure = () => ({
	type: USERLISTFAILURE
});
