import { GET_RESUTLS_REQUESTED, GET_RESULTS_SUCCESS, GET_RESULTS_FAIL } from './types'

export const getResultsRequested = () => ({
    type: GET_RESUTLS_REQUESTED
});

export const getResutlsSuccess = (resultsData) => ({
    type: GET_RESULTS_SUCCESS,
    resultsData
});

export const getResutlsFail = () => ({
    type: GET_RESULTS_FAIL
});