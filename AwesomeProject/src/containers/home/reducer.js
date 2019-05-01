import { GETUSERLISTREQUEST, USERLISTSUCCESS, USERLISTFAILURE } from './constant';
const INITIALSTATE = {
	loading: false,
	data: [],
	error: null
};

export default (state = INITIALSTATE, action) => {
	switch (action.type) {
		case GETUSERLISTREQUEST:
			return {
				...state,
				loading: true
			};
		case USERLISTSUCCESS:
			return {
				...state,
				data: action.data,
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
