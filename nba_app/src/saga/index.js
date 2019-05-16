import { fork } from 'redux-saga/effects';
import sagaLogin from '../containers/login/saga'


export default function* rootSaga() {
    yield [
      fork(sagaLogin)
      ];
  }