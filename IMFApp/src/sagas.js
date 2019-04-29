import { fork } from 'redux-saga/effects';
import sagaLogin from './containers/login/sagas';

export default function* rootSaga() {
    yield [
        fork(sagaLogin),
    ];
}