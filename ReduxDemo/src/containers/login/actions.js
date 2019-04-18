import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from "./types";
import User from "../../utils/models/user";

export const loginAPI = () => {
  return dispatch => {
    let user = new User();
    dispatch(loginUserAction());
    user.loginUser(
      response => {
        dispatch(loginUserSuccessAction(response));
      },
      error => {
        dispatch(loginUserFailureAction(error));
      }
    );
  };
};

export const loginUserAction = () => {
  return {
    type: LOGIN_USER
  };
};

export const loginUserSuccessAction = data => {
  return {
    type: LOGIN_USER_SUCCESS,
    data
  };
};

export const loginUserFailureAction = error => {
  return {
    type: LOGIN_USER_FAILURE,
    error
  };
};
