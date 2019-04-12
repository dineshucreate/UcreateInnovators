import { REQUEST_SUCCESS } from "./constants";
import { takeEvery } from 'redux-saga/effects';

function* onLoginRequested({}){
    try {
        console.log('Simer...');
    } catch (error) {
     console.log(error.log);
    }     
}

function* sagaLogin() {
    yield takeEvery(REQUEST_SUCCESS, onLoginRequested);
}
 export default sagaLogin;