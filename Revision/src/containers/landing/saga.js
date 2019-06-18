import * as type from './types'
import {takeEvery} from 'redux-saga/effects'
import employee from '../../utilities/models/employee'
function *incrementClicked() {
    console.log('Saga calledddddddd')
    let emp = new employee()
    const response = yield emp.getEmployees()
    console.log(JSON.stringify(response))
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