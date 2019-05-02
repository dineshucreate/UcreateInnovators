import axios from 'axios';
import { Alert } from 'react-native';
import { takeEvery, put, call } from 'redux-saga/effects';
import { LOGIN_REQUESTED } from './constants';
import {loginSuccess,loginFail} from './action'

function * onLoginRequest({email,password,navigator}){

    const bodyValue = {
        'email': email,
        'password': password
      }
  
      const headerValue = {
        'Content-Type': 'application/json',
        'ZUMO-API-VERSION': '2.0.0',
        'Ocp-Apim-Subscription-Key': '6c192d2e80bb49a8b90f6d684cf18b9b'
      }
    const url ="https://footballalbum-prod-api.imfootball.me/userapi/api/Auth/Login"; //`${API_URL}${kServiceAuthentication}`;
    try {
        const loginData = yield call(axios.post, url,bodyValue,{headers:headerValue});
        yield put(loginSuccess(loginData.data));
       // Alert.alert(JSON.stringify(loginData.data));
        
       navigator.navigate('dashboard');
        // if (loginData.data.success === true) {
        //     yield put(loginSuccess(loginData.data));
        //    // navigator.navigate('flatList');
        //   } else {
        //     Alert.alert(loginData.data.message);
        //   }
    } catch (error) {
        yield put(loginFail(error));
        Alert.alert(`login failed: ${error}`);
    }
}
function* sagaLogin() {
    yield takeEvery(LOGIN_REQUESTED, onLoginRequest);
  }
  export default sagaLogin;