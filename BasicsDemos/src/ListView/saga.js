
import {put, call, takeEvery ,all} from 'redux-saga/effects';
import {DATA_REQUEST} from './constant';
import {domasticSuccess,domasticFail, domasticRequest} from './action'
import axios from 'axios';


function* onDomasticRequest(){

    // axios.get('https://footballalbum-prod-api.imfootball.me/userapi/api/Competitions/Domestic',{
    //     headers:{
    //       'ZUMO-API-VERSION':'2.0.0',
    //       'Ocp-Apim-Subscription-Key':'6c192d2e80bb49a8b90f6d684cf18b9b',
    //     }
    //   }).then(res => {
    //     const response = res.data;
    //    // yield put(domasticSuccess(response.data));
    //    alert(JSON.stringify(response.data));
    //     console.log('..............   '+ JSON.stringify(response.countries));
    //    // this.setState({arrayList: response.countries});
      
    //   //  alert(JSON.stringify(response));
    //   })



    const header={
      
        'ZUMO-API-VERSION': '2.0.0',
        'Ocp-Apim-Subscription-Key': '6c192d2e80bb49a8b90f6d684cf18b9b'
    }

    const url = 'https://footballalbum-prod-api.imfootball.me/userapi/api/Competitions/Domestic';

    try{
     const domsData =   yield call(axios.get, url ,{headers: header}); 
     console.log("Error1----------- " +JSON.stringify(domsData))
     yield put(domasticSuccess(domsData.data));
     console.log("Error2----------- " );
     alert(JSON.stringify(domsData.data));

    }catch(error){

        console.log("Error----------- " +error)
        //yield put(domasticFail(error));
        //alert(`login failed: ${error}`)
    }

}


function * sagaDomastic(){
    yield takeEvery(DATA_REQUEST, onDomasticRequest)
}
export default sagaDomastic;