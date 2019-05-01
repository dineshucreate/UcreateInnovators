import {EMAIL_TEXT_CHANGED, PASSWORD_TEXT_CHANGED, LOGIN_CLICKED, LOGIN_SUCCEED, LOGIN_ERROR} from './types'
const INITIAL_STATE = {
    email:'y@y.co', 
    password:'Ios@1234',
    loading:false
}
export default loginReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case EMAIL_TEXT_CHANGED:
        return {
            ...state,
            email:action.email
        }
        case PASSWORD_TEXT_CHANGED:
        return {
            ...state,
            password:action.password
        }
        case LOGIN_CLICKED:
        return {
            ...state,
            email:action.email,
            password:action.password,
            loading:action.loading
        }
        case LOGIN_SUCCEED:
        return {
            ...state,
            response:action.response,
            loading:action.loading
        }
        default:
        return state
    }
}