import {
    LIST_REQUEST,
    LIST_SUCCESS,
    LOAD_MORE_REQUEST,
    LOAD_MORE_SUCCESS
} from "./constants";

export const listRequest = () =>({
    type: LIST_REQUEST
});


export const listSuccess = (data, nextPageToken, pageInfo) =>
({
    type: LIST_SUCCESS,
    data,
    nextPageToken,
    pageInfo
});

export const loadMoreRequest = (nextPageToken) =>({
    type: LOAD_MORE_REQUEST,
    nextPageToken
});


export const loadMoreSuccess = (data, nextPageToken, pageInfo) =>
({
    type: LOAD_MORE_SUCCESS,
    data,
    nextPageToken,
    pageInfo
});