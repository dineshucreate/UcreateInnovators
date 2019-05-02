import { LOGIN_REQUESTED, REQUEST_SUCCESS, REQUEST_FAIL } from './types';

export const loginRequest = (email, password, navigator) => ({
    type: LOGIN_REQUESTED,
    email,
    password,
    navigator,
});

export const loginSuccess = (gifsData) => (
    {
        type: REQUEST_SUCCESS,
        gifsData
    }
);
export const loginFail = () => (
    {
        type: REQUEST_FAIL
    }
);