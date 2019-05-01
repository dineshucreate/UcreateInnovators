import { GET_RESUTLS_REQUESTED, GET_RESULTS_SUCCESS, GET_RESULTS_FAIL } from './types'

const INITIAL_STATE = {
    loading: false,
    resultsData: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_RESUTLS_REQUESTED: return {
            ...state,
            loading: true
        };
        case GET_RESULTS_SUCCESS: return {
            ...state,
            loading: false,
            resultsData: action.resultsData
        };
        case GET_RESULTS_FAIL: return {
            ...state,
            loading: false
        };
        default:
            return state;
    }
};