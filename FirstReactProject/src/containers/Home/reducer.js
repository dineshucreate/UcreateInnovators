import {
    REQUEST_API,
    REQUEST_SUCCESS,
    REQUEST_FAIL,
} from './constants';

const INITIAL_STATE = {
    loading: false,
    empData: [],
 };

const homeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REQUEST_API: {
            return {
                ...state,
                loading: true,
            };
        }
        case REQUEST_SUCCESS: {
            return { 
                ...state,
                empData: [...state.empData, ...action.empDataList],
                loading: false,
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
