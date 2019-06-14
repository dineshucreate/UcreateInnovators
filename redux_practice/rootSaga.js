import { fork } from 'redux-saga/effects';
import sagaCallApi from './src/containers/detail/saga';


function* rootSaga() {
    yield [
      fork(sagaCallApi)
    ];
  }

  export default rootSaga;