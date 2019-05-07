import { combineReducers } from 'redux';
import loginReducer from './containers/LogIn/reducer';
import flatListReducer from './containers/List/reducer';
import { ON_USER_LOGOUT } from './containers/CustomDrawer/constants';


const appReducer = combineReducers({
   login: loginReducer,
   flatList: flatListReducer
});

const rootReducer = (state, action) => {
   let newState = state;
   if (action.type === ON_USER_LOGOUT) {
      newState = undefined;
   }
   return appReducer(newState, action);
 };

export default rootReducer;
