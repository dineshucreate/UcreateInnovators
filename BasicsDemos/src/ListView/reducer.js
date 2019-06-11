import {REQUEST_FAIL,REQUEST_SUCCESSS,DATA_REQUEST} from './constant';

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

        case REQUEST_SUCCESSS:
        console.log('reducer..........'+ JSON.stringify(action.data));
        
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