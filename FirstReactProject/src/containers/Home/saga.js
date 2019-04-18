import axios from 'axios';
import { takeEvery, call, put } from 'redux-saga/effects';
import { REQUEST_API } from './constants';
import { requestSuccess } from './actions';

function* onApiRequested() {
     try {
         const url = 'http://dummy.restapiexample.com/api/v1/employees';
         const employeesData = yield call(axios.get, url);
         console.log(`Dev   ${JSON.stringify(employeesData)}`);
         yield put(requestSuccess(employeesData.data));
   } catch (err) {
     console.log('Error - - - ', err);
   }   
}

function* sagaHome() {
    yield takeEvery(REQUEST_API, onApiRequested);
}
 export default sagaHome;
