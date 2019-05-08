import { fork } from 'redux-saga/effects';
import sagaLogin from './src/reduxPractice/saga';


export default function* rootSaga() {
    yield [
        fork(sagaLogin)
    ];
}