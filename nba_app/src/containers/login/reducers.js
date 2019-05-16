import {
    LOGIN_REQUESTED, REQUEST_SUCCESS, REQUEST_FAIL
  } from './constants';


  const INITIAL_STATE = {
    loginData: null,
    loading: false,
    error: null,
    loginDetails: {
      email: '',
      password: '',
    },
  };

  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case LOGIN_REQUESTED:
        return {
          ...state,
          loading: true,
        };
      case REQUEST_SUCCESS:
        return {
          ...state,
          loading: false,
          loginData: action.data
        };
      case REQUEST_FAIL:
        return {
          ...state,
          loading: false
        };
      default:
        return state;
    }
  };