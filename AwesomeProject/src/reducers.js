import { combineReducers } from 'redux';
import loginReducers from './containers/login/reducer';
import homeReducer from './containers/home/reducer';
import profileReducer from './containers/profile/reducer';

const rootReducer = combineReducers({
	login: loginReducers,
	home: homeReducer,
	profile: profileReducer
});

export default rootReducer;
