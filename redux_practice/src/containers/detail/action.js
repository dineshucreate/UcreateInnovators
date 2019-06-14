import { API_REQ, API_SUCCESS, API_ERROR } from './constants';

export const actionReqApi = (param1) => ({type: API_REQ, param1})


export const actionApiSuccess = (data) => ({API_SUCCESS,data})


export const actionApiFailure = (err) => ({API_ERROR,err})


