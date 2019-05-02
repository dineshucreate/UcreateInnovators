import { GET_NEWS_REQUEST, GET_NEWS_REQUEST_SUCCESS, GET_NEWS_REQUEST_FAIL } from './types'

export const getNewsRequest = () => ({
    type: GET_NEWS_REQUEST
});

export const getNewsRequestSuccess = (newsData) => ({
    type: GET_NEWS_REQUEST_SUCCESS,
    newsData
})

export const getNewsRequestFail = () => ({
    type: GET_NEWS_REQUEST_FAIL
})