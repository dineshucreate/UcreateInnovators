import { combineReducers } from 'redux';
import loginReducers from './containers/Login/reducers'
import dashboardReducers from './containers/dasboard/reducer'

const rootReducer=combineReducers({
login: loginReducers,
dashboard: dashboardReducers
});

export default rootReducer;