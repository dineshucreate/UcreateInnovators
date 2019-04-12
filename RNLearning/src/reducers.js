import { combineReducers } from 'redux';
import loginReducer from './containers/LogIn/reducer';
import flatListReducer from './containers/List/reducer';


const rootReducer = combineReducers({
   login: loginReducer,
   flatList: flatListReducer
});

export default rootReducer;
