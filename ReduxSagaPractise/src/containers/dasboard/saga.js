import axios from 'axios';
import { Alert } from 'react-native';
import { takeEvery, put, call } from 'redux-saga/effects';
import { DASBOARD_REQUESTED } from './constants';
import { dasboardSuccess, dasboardFail } from './action'

function* onDashboardRequest({ }) {
    const url = "http://dummy.restapiexample.com/api/v1/employees"; //`${API_URL}${kServiceAuthentication}`;
    try {
        const dashboardData = yield call(axios.get, url);
        yield put(dasboardSuccess(dashboardData.data));
        Alert.alert(JSON.stringify(dashboardData.data));

    } catch (error) {
        yield put(dasboardFail(error));
        Alert.alert(`dashboard failed: ${error}`);
    }
}
function* sagaDashboard() {
    yield takeEvery(DASBOARD_REQUESTED, onDashboardRequest);
}
export default sagaDashboard;