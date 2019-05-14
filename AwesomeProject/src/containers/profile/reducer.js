import { GETPHOTOSLISTREQUEST, PHOTOSLISTSUCCESS, PHOTOSLISTFAILURE } from './constant';
const INITIAL_STATE = {
	loading: false,
	error: null,
	dataArray: []
};
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GETPHOTOSLISTREQUEST:
			return {
				...state,
				loading: true
			};
		case PHOTOSLISTSUCCESS:
			return {
				...state,
				loading: false,
				dataArray: [ ...state.dataArray, ...action.data ]
			};
		case PHOTOSLISTFAILURE:
			return {
				...state,
				loading: false
			};
		default:
			return state;
	}
};
