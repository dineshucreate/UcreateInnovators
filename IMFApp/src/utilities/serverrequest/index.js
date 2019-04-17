import Axios from "axios";

export const consumeGetAPI = (url, headers, successCallback, failureCallback) => {
    Axios.get(url, { headers: headers }).then((response) => {
        successCallback(response)
    }).catch((error) => {
        failureCallback(error)
    })
}

export const consumePOSTAPI = (url, body, headers, successCallback, failureCallback) => {
    Axios.post(url, body, { headers: headers }).then((response) => {
        successCallback(response)
    }).catch((error) => {
        failureCallback(error)
    })
}