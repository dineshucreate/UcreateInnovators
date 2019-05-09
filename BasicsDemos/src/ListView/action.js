import {REQUEST_FAIL,REQUEST_SUCCESS,DATA_REQUEST} from './constant';


export const  domasticRequest = () => ({
    type: DATA_REQUEST,
    
});

export const domasticSuccess = (data) => ({
    type: REQUEST_SUCCESS,
    data
});
export const domasticFail = () => ({
    type : REQUEST_FAIL
});