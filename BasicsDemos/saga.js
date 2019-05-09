import { fork } from 'redux-saga/effects';
import sagaLogin from './src/reduxPractice/saga';
import sagaDomastic from './src/ListView/saga';


export default function* rootSaga() {
    yield [
        fork(sagaLogin),
        fork(sagaDomastic)
    ];
}