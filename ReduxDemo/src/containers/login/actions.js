import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  ON_CHANGE_EMAIL,
  ON_CHANGE_PASSWORD
} from "./types";
import User from "../../utils/models/user";

export const loginAPI = (email, password) => {
  return {
    type: LOGIN_USER,
    email:email,
    password:password
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

export const onChangeEmailAction = email => {
  return {
    type: ON_CHANGE_EMAIL,
    email
  };
};

export const onChangePasswordAction = password => {
  return {
    type: ON_CHANGE_PASSWORD,
    password
  };
};
