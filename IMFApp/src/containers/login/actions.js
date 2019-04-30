import { LOGIN_REQUESTED, REQUEST_SUCCESS, REQUEST_FAIL } from './constants';


export const loginRequest = (email, password, navigator) => ({
    type: LOGIN_REQUESTED,
    email,
    password,
    navigator,
});

export const loginSuccess = () => (
    {
        type: REQUEST_SUCCESS,
    }
);
export const loginFail = () => (
    {
        type: REQUEST_FAIL
    }
);