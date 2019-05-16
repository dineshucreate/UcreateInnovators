import { combineReducers } from 'redux';
import loginReducers from '../containers/login/reducers'

const rootReducer=combineReducers({
    login: loginReducers,
});

export default rootReducer;