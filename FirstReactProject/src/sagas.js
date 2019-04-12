import { fork } from 'redux-saga/effects';
import sagaLogin from './containers/Login/saga';

function* rootSaga() {
 yield [
    fork(sagaLogin)
 ];
}
export default rootSaga;
