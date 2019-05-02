import { GET_NEWS_REQUEST, GET_NEWS_REQUEST_SUCCESS, GET_NEWS_REQUEST_FAIL } from './types'

const INITIAL_STATE = {
    loading: false,
    newsData: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_NEWS_REQUEST: return {
            ...state,
            loading: true
        };
        case GET_NEWS_REQUEST_SUCCESS: return {
            ...state,
            loading: false,
            newsData: action.newsData
        };
        case GET_NEWS_REQUEST_FAIL: return {
            ...state,
            loading: false
        };
        default:
            return state;
    }
};


