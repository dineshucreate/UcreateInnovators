import Axios from "axios";

export const consumePostApi = (url, body, headers, successCallback, failureCallback) => {
    Axios.post(url, body, {headers : headers}).then((response)=> {
        successCallback(response)
    }).catch((error)=> {
        failureCallback(error)
    })
}