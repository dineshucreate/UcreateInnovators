import {
     REQUEST_SUCCESS,
     REQUEST_CALL_LOGIN_API,
     REQUEST_FAIL,
  } from './constants';

const INITIAL_STATE = {
   loading: false,
   username: '',
   password: '',
};
const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_SUCCESS: {
      return {  
        ...state,
        accessDataInIndex: action.loginData1,
        loading: false,
      };  
    }
    case REQUEST_CALL_LOGIN_API: {
      return { 
        ...state,
        username: action.username,
        password: action.password,
        loading: true,
      };  
    }
    case REQUEST_FAIL: {
      return {  
        ...state,
        errorFromServer: action.err,
        loading: false,
      };  
    }
    default:
    return state;
  }
};
export default loginReducer;
