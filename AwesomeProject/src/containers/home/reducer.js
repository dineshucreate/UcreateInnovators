import { GETUSERLIST, USERLISTSUCCESS, USERLISTFAILURE } from './constant';
const INITIALSTATE = {
	loading: false,
	data: [],
	error: null
};

export default (state = INITIALSTATE, action) => {
	switch (action.type) {
		case GETUSERLIST:
			return {
				...state,
				loading: true
			};
		case USERLISTSUCCESS:
			return {
				...state,
				loading: false
			};
		case USERLISTFAILURE:
			return {
				...state,
				loading: false
			};
		default:
			return state;
	}
};
