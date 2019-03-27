import {fork} from 'redux-saga/effects';
import sagaLogin from './containers/LogIn/saga';
import sagaFlatList from './containers/List/saga';


export default function* rootSaga() {
    yield [
      fork(sagaLogin),
      fork(sagaFlatList)
    ];
  }