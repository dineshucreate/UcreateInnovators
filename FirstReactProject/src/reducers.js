import { combineReducers } from 'redux';
import loginReducer from './containers/Login/reducer';
import homeReducer from './containers/Home/reducer';

const rootReducer = combineReducers({
    login: loginReducer,
    home: homeReducer,
});
export default rootReducer;
