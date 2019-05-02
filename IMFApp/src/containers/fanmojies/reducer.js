import { GET_GIFS, GET_GIFS_SUCCESS, GET_GIFS_FAIL } from './types'

const INITIAL_STATE = {
    loading: false,
    gifsData: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_GIFS: return {
            ...state,
            loading: true
        };
        case GET_GIFS_SUCCESS: return {
            ...state,
            loading: false,
            gifsData: action.gifsData
        };
        case GET_GIFS_FAIL: return {
            ...state,
            loading: false
        };
        default:
            return state;
    }
};


