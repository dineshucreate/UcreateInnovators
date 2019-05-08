import { combineReducers } from 'redux';
import loginReducers from './src/reduxPractice/reducer';


const rootReducer=combineReducers({
login: loginReducers
});

export default rootReducer;