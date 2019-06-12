
import {
    ARTICLE_REQUESTED_DATA, SEND_DATA
} from './constants';


export const articleRequestForData = (data) => ({
    type: ARTICLE_REQUESTED_DATA,
    data
});
export const sendData = (data) => ({
    type: SEND_DATA,
    data
});
