import { combineReducers } from 'redux';
import loginReducers from './containers/login/reducer';

const rootReducer = combineReducers({
	login: loginReducers
});

export default rootReducer;
