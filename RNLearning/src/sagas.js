import {fork} from 'redux-saga/effects';
import sagaLogin from './containers/LogIn/saga';


export default function* rootSaga() {
    yield [
      fork(sagaLogin)
    ];
  }