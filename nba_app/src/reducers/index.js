import { combineReducers } from 'redux';
import loginReducers from '../containers/login/reducers'

import articleReducers from '../containers/bottomtab/live/reducers'
import newReducers from '../containers/bottomtab/stats/reducers'

const rootReducer = combineReducers({
    login: loginReducers,
    article: articleReducers,
    news:newReducers
});

export default rootReducer;