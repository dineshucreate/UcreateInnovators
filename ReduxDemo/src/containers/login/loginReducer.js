import {LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE} from './types'

const INITIAL_STATE = {
    data:null,
    isLoading:false
}

export default loginReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_USER:
        return {
            ...state,
            data: null,
            isLoading:true
        }
        case LOGIN_USER_SUCCESS: 
        return {
            ...state,
            data:action.data,
            isLoading:false
        }
        case LOGIN_USER_FAILURE: 
        return {
            ...state,
            isLoading:false
        }
        default:
        return state
    }
}