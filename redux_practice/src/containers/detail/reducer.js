import { API_REQ, API_SUCCESS, API_ERROR } from './constants'

const initialState = {
    data: [],
    loading: false,
    error: null
}

export default function (state = initialState, action) {
    
    switch (action.type) {
        case API_REQ: {
            console.log(' -------------  API_REQ Reducer');
            return {
                ...state,
                loading: true
            }
        }
        case API_SUCCESS: {
            return {
                loading: false,
                data: action.data,
                error: null
            }
        }

        case API_ERROR: {
            return {
                loading: false,
                error: true
            }
        }
        default:
            return state;
    }
}