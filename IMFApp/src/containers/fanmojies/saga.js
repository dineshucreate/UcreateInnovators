import { takeEvery, put } from 'redux-saga/effects';
import Axios from "axios";
import { GET_GIFS } from './types';
import { getGifsSuccess, getGifsFail } from './actions';
import { kMethodGetKey } from '../../utilities/config';

function* onGetGifs() {
    const url = 'https://api.giphy.com/v1/gifs/search?api_key=ONWNfAZNFXhp3VZwV0oM9KFvg63ChrkE&q=rangers&limit=25&offset=0&rating=G&lang=en';
    try {
        const config = {
            method: kMethodGetKey,
            url,
            responseType: 'json'
        };
        const gifsData = yield Axios(config);
        yield put(getGifsSuccess(gifsData.data.data));
    } catch (error) {
        yield put(getGifsFail())
        alert(JSON.stringify(error.response.data.message));
    }
}

function* gifsSaga() {
    yield takeEvery(GET_GIFS, onGetGifs);
}

export default gifsSaga;



