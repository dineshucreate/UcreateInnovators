
import {
    ARTICLE_REQUESTED_DATA, SEND_DATA
} from './constants';
const INITIAL_STATE = {
    items: [],
    item:{}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ARTICLE_REQUESTED_DATA:
            return {
                ...state,
                items: action.data
            };
            case SEND_DATA:
            return {
                ...state,
                item: action.data
            };
        default:
            return state;
    }
};