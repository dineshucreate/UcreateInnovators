import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios'
import { actionApiSuccess, actionApiFailure } from './action'
import { API_REQ } from './constants'

 function* callApi({param}) {
    console.log(' -------------  callApi');
    const url = 'https://reqres.in/api/users?'
    try {
        const data = yield call(axios.get, url, { params: { page: 2 }});
        console.log('JSON: '+JSON.stringify(data));
        actionApiSuccess(actionApiSuccess(data))

    }catch(err){
        console.log('JSON ERROR : '+err);
    }

}


function* sagaCallApi() {
    console.log(' -------------  sagaCallApi');
    yield takeEvery(API_REQ, callApi);
}

export default sagaCallApi;