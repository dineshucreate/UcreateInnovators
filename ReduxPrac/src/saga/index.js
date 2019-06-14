import {watchIncrementClicked} from '../containers/landing/saga'
import {all} from 'redux-saga/effects'
export default function* rootSaga() {
    yield all([
        watchIncrementClicked()
    ])
}