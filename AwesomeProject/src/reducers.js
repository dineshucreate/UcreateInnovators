import { combineReducers } from 'redux';
import loginReducers from './containers/login/reducer';
import homeReducer from './containers/home/reducer';

const rootReducer = combineReducers({
	login: loginReducers,
	home: homeReducer
});

export default rootReducer;
