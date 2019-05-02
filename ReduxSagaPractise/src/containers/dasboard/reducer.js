import {
    DASBOARD_REQUESTED, DASBOARD_REQUEST_SUCCESS, DASBOARD_REQUEST_FAIL
  } from './constants';

  const INITIAL_STATE = {
    users: [],
    loading: false,
    error: null,
   
  };
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case DASBOARD_REQUESTED:
        return {
          ...state,
          loading: true,
        };
      case DASBOARD_REQUEST_SUCCESS:
        return {
          ...state,
          loading: false,
          users: action.data
        };
      case DASBOARD_REQUEST_FAIL:
        return {
          ...state,
          loading: false
        };
      default:
        return state;
    }
  };