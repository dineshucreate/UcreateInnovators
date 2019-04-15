
import {
     REQUEST_SUCCESS,
     REQUEST_CALL_LOGIN_API,
  } from './constants';
  
export const loginSuccess = (simiData) => (
  {
    type: REQUEST_SUCCESS,
    simiData
  }
);

export const loginRequest = (username, password) => (
  {
    type: REQUEST_CALL_LOGIN_API,
    username, 
    password, 
  }
);

