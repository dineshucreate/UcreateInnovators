import {put, takeEvery} from 'redux-saga/effects'
import {EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_CLICKED, LOGIN_SUCCESS, LOGIN_FAILURE} from './types'
import User from '../../utils/models/user'
function* loginUser(action) {
    let user = new User(action.email, action.password)
    const response = yield user.loginUser()
    alert(JSON.stringify(response))
}

export function* watchLoginUser() {
    yield takeEvery(LOGIN_CLICKED, loginUser)
}