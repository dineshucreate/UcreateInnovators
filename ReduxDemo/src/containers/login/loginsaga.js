import {LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, ON_CHANGE_EMAIL, ON_CHANGE_PASSWORD} from './types'
import {put, takeEvery} from 'redux-saga/effects'
import {loginUserSuccessAction} from '../../containers/login/actions'
import User from '../../utils/models/user'
// const loginUser = (obj) => {
//     let user = new User(obj.email, obj.password);
//     user.loginUser(
//       response => {
//         alert(JSON.stringify(response))
//         // yield put 
//         // dispatch(loginUserSuccessAction(response));
//       },
//       error => {
//         alert(JSON.stringify(error))
//         // dispatch(loginUserFailureAction(error));
//       }
//     );
// }


function* loginUser(obj) {
    let user = new User(obj.email, obj.password);
    yield user.loginUser(
      response => {
        alert(JSON.stringify(response))
        // yield put(loginUserSuccessAction(response.data))
        // dispatch(loginUserSuccessAction(response));
      },
      error => {
        alert(JSON.stringify(error))
        // dispatch(loginUserFailureAction(error));
      }
    );
}

// function* loginUser(obj) {
//     let user = new User(obj.email, obj.password);
//     yield user.loginUser( function*(response) {
//         alert(JSON.stringify(response))
//         yield put(loginUserSuccessAction(response.data))
//         // dispatch(loginUserFailureAction(error));
//       },
//       function*(error) {
//         alert(JSON.stringify(error))
//         // dispatch(loginUserFailureAction(error));
//       }
//     );
// }

export function* watchLoginUser() {
    yield takeEvery(LOGIN_USER,loginUser)
} 

const passwordChanged = () => {
    console.log('Password changed')
}

export function* watchPasswordChange() {
    yield takeEvery(ON_CHANGE_PASSWORD,passwordChanged)
} 