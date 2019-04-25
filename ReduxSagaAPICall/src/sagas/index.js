import {all} from 'redux-saga/effects'
import {watchLoginUser} from '../containers/login/saga'
export default function* rootSaga() {
    yield all([
        watchLoginUser()
    ])
}