import { all } from 'redux-saga/effects';
import loginSaga from './containers/login/saga';
import homeSaga from './containers/home/saga';
export default function* rootSaga() {
	yield all([ loginSaga(), homeSaga() ]);
}
