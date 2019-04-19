import { LIST_REQUEST, LIST_SUCCESS, LIST_FAILURE, LOAD_MORE_REQUEST,
    LOAD_MORE_SUCCESS } from './constants';

const initialState = {
    data: [],
    nextPageToken: '',
    pageInfo: {},
    loading: false,
    error: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LIST_REQUEST: {
            return {
                ...state,
                loading: true
            };
        }
        case LIST_SUCCESS: {
            return {
                loading: false,
                data: action.data,
                nextPageToken: action.nextPageToken,
                pageInfo: action.pageInfo,
                error: false
            };
        }
        case LIST_FAILURE: {
            return {
                loading: false,
                error: true
            };
        }
        case LOAD_MORE_REQUEST: {
            return {
                ...state,
                loading: true
            };
        }
        case LOAD_MORE_SUCCESS: {
            return {
                loading: false,
                data: [...state.data, ...action.data],
                nextPageToken: action.nextPageToken,
                pageInfo: action.pageInfo,
                error: false
            };
        }
        default:
            return state;
    }
}
