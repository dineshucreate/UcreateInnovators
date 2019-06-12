import { combineReducers } from 'redux';
import loginReducers from '../containers/login/reducers'

import articleReducers from '../containers/bottomtab/live/reducers'

const rootReducer = combineReducers({
    login: loginReducers,
    article: articleReducers
});

export default rootReducer;