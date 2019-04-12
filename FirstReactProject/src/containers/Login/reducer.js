import {
     REQUEST_SUCCESS
  } from './constants';

const INITIAL_STATE = {
  loading: true,

};
export default loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_SUCCESS: {
    return { 
      ...state,
      loading: false
    };  
  }
    default:
    return state;
  }
};
