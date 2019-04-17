import { fork } from 'redux-saga/effects';
import sagaLogin from './containers/Login/saga';
import sagaHome from './containers/Home/saga';

function* rootSaga() {
 yield [
    fork(sagaLogin),
    fork(sagaHome),
 ];
}
export default rootSaga;
