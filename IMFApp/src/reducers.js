import { combineReducers } from 'redux';
import loginReducer from './containers/login/reducer';
import statsReducer from './containers/stats/reducer';

const rootReducer = combineReducers({
    login: loginReducer,
    stats: statsReducer
});

export default rootReducer;