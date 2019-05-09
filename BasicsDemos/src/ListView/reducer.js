import {REQUEST_FAIL,REQUEST_SUCCESS,DATA_REQUEST} from './constant';

const INITIAL_STATE = {
    domasticData:null,
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case DATA_REQUEST:
        return{
            ...state,
            loading: true
        };

        case REQUEST_SUCCESS:
        return{
            ...state,
            loading: false,
            domasticData: action.data,
        };

        case REQUEST_FAIL:
        return{
            ...state,
            loading: false
        };

        default:{
            return state;
        }
    }
};