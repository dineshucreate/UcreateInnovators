import {
     REQUEST_SUCCESS,
     REQUEST_CALL_LOGIN_API,
  } from './constants';

const INITIAL_STATE = {
   loading: true,
   username: '',
   password: '',
   //simi: {}
};
const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_SUCCESS: {
      return { 
        simi: action.simiData
      };  
    }
    case REQUEST_CALL_LOGIN_API: {
      return { 
        username: action.username,
        password: action.password,
      };  
    }
    default:
    return state;
  }
};
export default loginReducer;
