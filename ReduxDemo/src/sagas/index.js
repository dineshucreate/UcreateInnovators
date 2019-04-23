import {LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, ON_CHANGE_EMAIL, ON_CHANGE_PASSWORD} from '../containers/login/types' 
import {watchLoginUser, watchPasswordChange} from '../containers/login/loginsaga'
import {delay} from 'redux-saga'
import {all} from 'redux-saga/effects'
export default function* rootSaga() {
    yield all([
        watchLoginUser(),
        watchPasswordChange()
    ])
}