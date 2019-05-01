import {all} from 'redux-saga/effects'
import watchLoginClicked from '../containers/authenticate/saga'

export default function* rootSaga() {
    yield all([
        watchLoginClicked()
    ])
}