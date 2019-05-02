import { takeEvery, put } from 'redux-saga/effects';
import Axios from "axios";
import { GET_NEWS_REQUEST } from './types';
import { getNewsRequestSuccess, getNewsRequestFail } from './actions';
import { kMethodGetKey } from '../../utilities/config';

function* onGetNews() {
    const url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCVaGyBPoEAZItDjlFPsRcSA&maxResults=10&key=AIzaSyAN858ogafqawmsU2ZTvueWZidUIpuXN5w&order=date';
    try {
        const config = {
            method: kMethodGetKey,
            url,
            responseType: 'json'
        };
        const newsData = yield Axios(config);
        yield put(getNewsRequestSuccess(newsData.data.items));
    } catch (error) {
        yield put(getNewsRequestFail())
        alert(JSON.stringify(error.response.data.message));
    }
}

function* newsSaga() {
    yield takeEvery(GET_NEWS_REQUEST, onGetNews);
}

export default newsSaga;



