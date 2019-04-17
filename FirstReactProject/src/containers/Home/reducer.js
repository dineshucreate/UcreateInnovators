import {
    REQUEST_API,
    REQUEST_SUCCESS,
    REQUEST_FAIL,
} from './constants';

const INITIAL_STATE = {
    loading: false,
    listData: [],
 };

const homeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REQUEST_API: {
            return {
                ...state,
            };
        }
        case REQUEST_SUCCESS: {
            return {
                ...state,
                empData: action.empDataList,
            };
        }
        case REQUEST_FAIL: {
            return {
                ...state,
            };
        }
        default:
            return state;
    }
};
export default homeReducer;
