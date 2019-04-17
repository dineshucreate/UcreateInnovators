import {
    REQUEST_API,
    REQUEST_SUCCESS,
    REQUEST_FAIL,
} from './constants';

export const requestAPI = () => (
    {
        type: REQUEST_API
    }
);

export const requestSuccess = (empDataList) => (
    {
        type: REQUEST_SUCCESS,
        empDataList
    }
);

export const requestFail = () => (
    {
        type: REQUEST_FAIL
    }
);

