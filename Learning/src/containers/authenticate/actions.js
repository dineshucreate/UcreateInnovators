import {EMAIL_TEXT_CHANGED, PASSWORD_TEXT_CHANGED, LOGIN_CLICKED, LOGIN_SUCCEED, LOGIN_ERROR} from './types'

export const emailTextChanged = (email) => {
    return {
        type:EMAIL_TEXT_CHANGED, 
        email
    }
}

export const passwordTextChanged = (password) => {
    return {
        type:PASSWORD_TEXT_CHANGED, 
        password
    }
}

export const loginClicked = (email, password) => {
    return {
        type:LOGIN_CLICKED, 
        email:email,
        password:password,
        loading:true
    }
}

export const loginSucceed = (response) => {
    return {
        type:LOGIN_SUCCEED, 
        response:response,
        loading:false
    }
}