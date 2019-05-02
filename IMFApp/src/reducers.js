import { combineReducers } from 'redux';
import loginReducer from './containers/login/reducer';
import statsReducer from './containers/stats/reducer';
import gifsReducer from './containers/fanmojies/reducer';
import newsReducer from './containers/news/reducer';

const rootReducer = combineReducers({
    login: loginReducer,
    stats: statsReducer,
    gifs: gifsReducer,
    news: newsReducer
});

export default rootReducer;