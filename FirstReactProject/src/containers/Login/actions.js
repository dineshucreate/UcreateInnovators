
import {
     REQUEST_SUCCESS,
     REQUEST_CALL_LOGIN_API,
     REQUEST_FAIL,
  } from './constants';
  
export const loginSuccess = (loginData1) => (
  {
    type: REQUEST_SUCCESS,
    loginData1
  }
);

export const loginRequest = (username, password) => (
  {
    type: REQUEST_CALL_LOGIN_API,
    username, 
    password, 
  }
);

export const loginFail = (err) => (
  {
    type: REQUEST_FAIL,
    err,
  }
);
