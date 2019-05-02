
import {
    DASBOARD_REQUESTED, DASBOARD_REQUEST_SUCCESS, DASBOARD_REQUEST_FAIL
} from './constants';


export const dasboardRequest = () => ({
    type: DASBOARD_REQUESTED
});

export const dasboardSuccess = (data) => (
    {
        type: DASBOARD_REQUEST_SUCCESS,
        data,
    }
);
export const dasboardFail = () => (
    {
        type: DASBOARD_REQUEST_FAIL
    }
);