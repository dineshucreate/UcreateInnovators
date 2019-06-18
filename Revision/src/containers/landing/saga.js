import * as type from './types'
import {takeEvery} from 'redux-saga/effects'

function *incrementClicked() {
    console.log('Saga calledddddddd')
}

function *decrementClicked() {
    console.log('Saga calledddddddd')
}

export function* watchIncrementClicked() {
    yield takeEvery(type.INCREMENT, incrementClicked)
}

export function* watchDecrementClicked() {
    yield takeEvery(type.DECREMENT, decrementClicked)
}