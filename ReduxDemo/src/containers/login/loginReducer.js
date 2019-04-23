import {LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, ON_CHANGE_EMAIL, ON_CHANGE_PASSWORD} from './types'

const INITIAL_STATE = {
    data:{user:{firstname:'', lastName:''}},
    email:'', 
    password:'',
    isLoading:false
}

export default loginReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_USER:
        return {
            ...state,
            isLoading:true
        }
        case LOGIN_USER_SUCCESS: 
        return {
            ...state,
            data:action.data.data,
            success:true,
            isLoading:false
        }
        case LOGIN_USER_FAILURE: 
        return {
            ...state,
            success:false,
            error:action.error,
            isLoading:false
        }
        case ON_CHANGE_EMAIL: 
        return {
            ...state,
            email:action.email
        }
        case ON_CHANGE_PASSWORD:
        return {
            ...state,
            password:action.password
        }
        default:
        return state
    }
}