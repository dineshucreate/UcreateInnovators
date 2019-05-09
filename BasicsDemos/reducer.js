import { combineReducers } from 'redux';
import loginReducers from './src/reduxPractice/reducer';
import domasticReducer from './src/ListView/reducer';


const rootReducer=combineReducers({
login: loginReducers,
domastic: domasticReducer
});

export default rootReducer;