
import {
    NEWS_REQUESTED_DATA, NEW_SEND_DATA
} from './constants';


export const newsRequestForData = (data) => ({
    type: NEWS_REQUESTED_DATA,
    data
});
export const sendDataNew = (data) => ({
    type: NEW_SEND_DATA,
    data
});