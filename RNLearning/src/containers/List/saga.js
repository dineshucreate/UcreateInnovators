import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { LIST_REQUEST, LOAD_MORE_REQUEST } from './constants'
import {listSuccess, loadMoreSuccess} from './actions'
import { kYoutubeApiKey, kChannelId, kYoutubeURL, kLoadMoreYoutubeURLParams, kLiveYoutubeURLParams, kYoutubeMaxResults } from '../../utilities/config';

function* fetchList({}) {
    try {
        const url = `${kYoutubeURL}key=${kYoutubeApiKey}&channelId=${kChannelId}&${kLiveYoutubeURLParams}&maxResults=${kYoutubeMaxResults}`;
        const listData = yield call(axios.get, url);      
        if (listData.data.items.length > 0) {
            yield put(listSuccess(listData.data.items, listData.data.nextPageToken, listData.data.pageInfo));
        } 
    } catch (error) {
        alert(`error + ${error}`);
    }
}
function* fetchMoreData({ nextPageToken }) {
    try {
        const url = `${kYoutubeURL}key=${kYoutubeApiKey}&channelId=${kChannelId}&${kLoadMoreYoutubeURLParams}&maxResults=${kYoutubeMaxResults}&pageToken=${nextPageToken}`;
        const loadMoreData = yield call(axios.get, url);      
        if (loadMoreData.data.items.length > 0) {
            yield put(loadMoreSuccess(loadMoreData.data.items, loadMoreData.data.nextPageToken, loadMoreData.data.pageInfo));
        } 
    } catch (error) {
        alert(`error + ${error}`);
    }
}

function* sagaFlatList() {
    yield takeEvery(LIST_REQUEST, fetchList);
    yield takeEvery(LOAD_MORE_REQUEST, fetchMoreData);
}

export default sagaFlatList;