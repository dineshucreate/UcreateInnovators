import * as type from '../containers/landing/saga'
import {all} from 'redux-saga/effects'
import {watchDecrementClicked, watchIncrementClicked} from '../containers/landing/saga'
export default function* rootSaga() {
    yield all([
        watchIncrementClicked(),
        watchDecrementClicked()
    ])
}