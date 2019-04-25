import {EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_CLICKED, LOGIN_SUCCESS, LOGIN_FAILURE} from './types'
const INITIAL_STATE = {
    email:'',
    password:''
}
export default loginReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case EMAIL_CHANGED:
        return {
            ...state,
            email:action.email
        }
        case PASSWORD_CHANGED:
        return {
            ...state,
            password:action.password
        }
        default:
        return state
    }
}