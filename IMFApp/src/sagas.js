import { fork } from 'redux-saga/effects';
import sagaLogin from './containers/login/sagas';
import statsSaga from './containers/stats/saga';
import gifsSaga from './containers/fanmojies/saga';
import newsSaga from './containers/news/saga';

export default function* rootSaga() {
    yield [
        fork(sagaLogin),
        fork(statsSaga),
        fork(gifsSaga),
        fork(newsSaga)
    ];
}