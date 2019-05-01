import { takeEvery, put } from 'redux-saga/effects';
import Axios from "axios";
import { GET_RESUTLS_REQUESTED } from './types';
import { getResutlsSuccess, getResutlsFail } from './actions';
import { kMethodGetKey, kSubscriptionKey, kXZumoAuthKey } from '../../utilities/config';

function* onGetResultsRequest() {
    const url = 'https://footballalbum-prod-api.imfootball.me/MatchAPI/api/Results/Get?idTournament=19&lastUpdate=2018-04-01T00:00:00Z';
    try {
        const config = {
            method: kMethodGetKey,
            headers: {
                "Content-Type": 'application/json',
                "ZUMO-API-VERSION": '2.0.0',
                "X-ZUMO-AUTH": kXZumoAuthKey,
                "Ocp-Apim-Subscription-Key": kSubscriptionKey,
            },
            url,
            responseType: 'json'
        };
        const resultsData = yield Axios(config);
        console.log('ResultData: ' + JSON.stringify(resultsData));

        yield put(getResutlsSuccess(resultsData.data));

    } catch (error) {
        yield put(getResutlsFail())
        alert(JSON.stringify(error.response.data.message));
    }
}

function* statsSaga() {
    yield takeEvery(GET_RESUTLS_REQUESTED, onGetResultsRequest);
}

export default statsSaga;



