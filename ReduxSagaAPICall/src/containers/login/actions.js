import {EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_CLICKED, LOGIN_SUCCESS, LOGIN_FAILURE} from './types'

export const emailChanged = (email) => {
    return {
        type:EMAIL_CHANGED,
        email:email
    }
}

export const passwordChanged = (password) => {
    return {
        type:PASSWORD_CHANGED,
        password:password
    }
}

export const loginClicked = (email, password) => {
    return {
        type:LOGIN_CLICKED,
        email:email,
        password:password
    }
}

export const loginSuccess = (response) => {
    return {
        type:LOGIN_SUCCESS,
        data:response
    }
}

const loginFailure = (error) => {
    return {
        type:LOGIN_FAILURE,
        error:error
    }
}