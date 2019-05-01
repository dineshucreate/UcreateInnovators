import { fork } from 'redux-saga/effects';
import sagaLogin from './containers/login/sagas';
import statsSaga from './containers/stats/saga';

export default function* rootSaga() {
    yield [
        fork(sagaLogin),
        fork(statsSaga)
    ];
}