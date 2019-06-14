import * as type from "./types";
import {takeEvery} from 'redux-saga/effects'
function* incrementClicked() {
    console.log('Sagaaaaaaaaaaaaaaaaaa')
}

export function* watchIncrementClicked() {
    yield takeEvery(type.INCREMENT, incrementClicked)
}