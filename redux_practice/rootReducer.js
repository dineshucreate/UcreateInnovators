import { combineReducers } from 'redux';
 import detailReducer from './src/containers/detail/reducer'

 
const rootReducer = combineReducers({
    detail: detailReducer
  });

  export default rootReducer;