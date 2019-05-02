import { fork } from 'redux-saga/effects';
import sagaLogin from './containers/Login/saga'
import sagaDashboard from './containers/dasboard/saga'

export default function* rootSaga() {
    yield [
      fork(sagaLogin),
      fork(sagaDashboard)
      ];
  }