
import {
    NEWS_REQUESTED_DATA, NEW_SEND_DATA
} from './constants';
const INITIAL_STATE = {
    news_items: [],
    item: {}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NEWS_REQUESTED_DATA:
            return {
                ...state,
                news_items: action.data
            };
        case NEW_SEND_DATA:
            return {
                ...state,
                item: action.data
            };
        default:
            return state;
    }
};