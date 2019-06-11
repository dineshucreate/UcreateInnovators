import {REQUEST_FAIL,REQUEST_SUCCESSS,DATA_REQUEST} from './constant';


export const  domasticRequest = () => ({
    type: DATA_REQUEST,
    
});

export const domasticSuccess = (data) => ({
    type: REQUEST_SUCCESSS,
    data
});
export const domasticFail = () => ({
    type : REQUEST_FAIL
});