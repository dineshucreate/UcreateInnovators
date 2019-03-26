import { combineReducers } from 'redux';
import loginReducer from './containers/LogIn/reducer'


const rootReducer = combineReducers({
   login: loginReducer,
})

export default rootReducer;